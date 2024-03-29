import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';

export const test=(req,res)=>{
    res.json({message:'Api is Working!'});
};
export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
      return next(errorHandler(403, 'You are not allowed to update this user'));
    }
    if (req.body.password) {
      if (req.body.password.length < 6) {
        return next(errorHandler(400, 'Password must be at least 6 characters'));
      }
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
      // if (req.body.username.length < 7 || req.body.username.length > 20) {
      //   return next(
      //     errorHandler(400, 'Username must be between 7 and 20 characters')
      //   );
      // }
      if (req.body.username.includes(' ')) {
        return next(errorHandler(400, 'Username cannot contain spaces'));
      }
      if (req.body.username !== req.body.username.toLowerCase()) {
        return next(errorHandler(400, 'Username must be lowercase'));
      }
      if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
        return next(
          errorHandler(400, 'Username can only contain letters and numbers')
        );
      }
    }
    try {
      if (req.body.isProvider !== undefined) {
        // Update isProvider field if included in the request body
        req.body.isProvider = true; // Assuming the value is set to true when submitting the form
            // notification: req.body.notification,

      }  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePicture: req.body.profilePicture,
            password: req.body.password,
            isProvider: req.body.isProvider,
            // isAdmin:true,
            // isProvider:false,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };
  export const deleteUser = async (req, res, next) => {
    if (!req.user.isAdmin && req.user.id !== req.params.userId) {
      return next(errorHandler(403, 'You are not allowed to delete this user'));
    }
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.status(200).json('User has been deleted');
    } catch (error) {
      next(error);
    }
  };
  export const signout = (req, res, next) => {
    try {
      res
        .clearCookie('access_token')
        .status(200)
        .json('User has been signed out');
    } catch (error) {
      next(error);
    }
  };

  export const getUsers = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to see all users'));
    }
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.sort === 'asc' ? 1 : -1;
  
      const users = await User.find()
        .sort({ createdAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const usersWithoutPassword = users.map((user) => {
        const { password, ...rest } = user._doc;
        return rest;
      });
  
      const totalUsers = await User.countDocuments();
      const now = new Date();
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
      const lastMonthUsers = await User.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        users: usersWithoutPassword,
        totalUsers,
        lastMonthUsers,
      });
    } catch (error) {
      next(error);
    }
  };

  export const getnotice =async(req,res,next)=>{
    try{
      const user = await User.findOne({_id:req.body.userId})
      if (!user) {
        return res.status(404).send({
            success: false,
            message: 'User not found'
        });
    }    
      const seennotification = user.seennotification || [];
      const notification = user.notification || [];
      seennotification.push(...notification)
      user.notification=[]
      user.seennotification=notification
      const updateduser= await user.save()
      req.status(200).send({
        success:true,
        message:'all notification marked as seen',
        data:updateduser,
      }) 
    }catch(error){
      next(error);
    }
  };

  // export const sendnotice =async(req,res,next)=>{
  //   try {
  //     const user = await User.findOne({ isProvider: true });
  //     if (!user) {
  //         return res.status(404).json({ success: false, message: 'Admin not found' });
  //     }

  //     const notification = user.notification;
  //     notification.push({
  //         type: 'request-service',
  //         message: `${req.user.id} has applied for services`, // Assuming req.user.id is the user ID
  //     });

  //     await User.findByIdAndUpdate(user._id, { notification });

  //     res.status(201).json({
  //         success: true,
  //         message: 'Notification Sent Successfully'
  //     });
  // } catch (error) {
  //     next(error); // Pass error to the error handling middleware
  // }
  // };
  export const sendnotice = async (req, res) => {
    const {userId,currentUse,sendId,fore,datetime} = req.body;
    try {
      // Find the user by userId
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Add the request details to the user's document
      user.notification.push({
        type: "Apply for service", 
        message: `${currentUse} sent a request for service of ${fore}`,
        data: {
          datetime:datetime,
          userId:sendId,
          name:currentUse,
          onClickPath: "/user/pend",
          fore:fore,
        },
      });
      
      // Save the updated user document
      await user.save();
  
      res.json({ message: 'Request sent successfully' });
    } catch (error) {
      console.error('Error sending request:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };

  export const delnotice = async (req, res) => {
    try {
      const { userId, notificationId } = req.body; // Get userId and notificationId from the request body
      const user = await User.findOne({ _id: userId });
  
      if (!user) {
        return res.status(404).send({
          success: false,
          message: 'User not found',
        });
      }
  
      // Find the index of the notification by its ID
      const index = user.notification.findIndex((n) => n._id === notificationId);
      if (index === -1) {
        return res.status(404).json({ success: false, message: "Notification not found" });
      }
  
      // Remove the notification from the array
      user.notification.splice(index, 1);
  
      const updatedUser = await user.save();
      updatedUser.password = undefined;
  
      res.status(200).send({
        success: true,
        message: "Notification Deleted Successfully",
        data: updatedUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        message: "Unable to delete notification",
        error,
      });
    }
  };
  
  // export const acceptNotice = async (req, res) => {
  //   const { userId, notificationId } = req.body;
  //   try {
  //     const user = await User.findById(userId);
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
      
  //     // Find the notification in the user's notifications array
  //     const notificationIndex = user.notification.findIndex(notification => notification._id.toString() === notificationId);
  //     if (notificationIndex === -1) {
  //       return res.status(404).json({ message: 'Notification not found' });
  //     }
  
  //     // Move the notification from the notifications array to the seennotification array
  //     const notification = user.notification.splice(notificationIndex, 1)[0];
  //     user.seennotification.push(notification);
  
  //     // Save the updated user document
  //     await user.save();
  
  //     return res.status(200).json({ message: 'Notification accepted successfully' });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ message: 'Internal server error' });
  //   }
  // };
//   export const acceptNotice = async (req, res) => {
//     try {
//     const { userId, notificationId } = req.body;
//         if (!notificationId) {
//           console.log(notificationId);
//             return res.status(400).json({ message: 'Notification ID is required' });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
        
//         // Find the notification in the user's notifications array
//         const notificationIndex = user.notification.findIndex(notification => notification._id.toString() === notificationId);
//         if (notificationIndex === -1) {
//             return res.status(404).json({ message: 'Notification not found' });
//         }
    
//         // Move the notification from the notifications array to the seennotification array
//         const notification = user.notification.splice(notificationIndex, 1)[0];
//         user.seennotification.push(notification);
    
//         // Save the updated user document
//         await user.save();
    
//         return res.status(200).json({ message: 'Notification accepted successfully' });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };

export const acceptNotice = async (req, res) => {
  const { userId, currentUse, sendId, fore, datetime } = req.body;

  try {
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add the request details to the user's document
    user.notification.push({
      type: 'Apply for service',
      message: `${currentUse} accepted your request for service of ${fore}`,
      data: {
        datetime: datetime,
        userId: sendId,
        name: currentUse,
        onClickPath: '/user/pend',
        fore: fore,
      },
    });

    // Save the updated user document
    await user.save();

    res.json({ message: 'Request sent successfully' });
  } catch (error) {
    console.error('Error sending request:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
