import Shop from '../models/shop.model.js';
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create a shop'));
  }
  if (!req.body.title || !req.body.price) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  let x = Math.random() * 1000000;
  const slug = x;
  const newShop = new Shop({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedShop = await newShop.save();
    res.status(201).json(savedShop); 
  } catch (error) {
    next(error);
  } 
};

export const getshops = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const shops = await Shop.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.shopId && { _id: req.query.shopId }),
      ...(req.query.price && { price: req.query.price }),
      ...(req.query.disprice && { disprice: req.query.disprice }),
      ...(req.query.brand && { brand: req.query.brand }),

      ...(req.query.searchTerm && {
        $or: [
          { brand: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
          { category: { $regex: req.query.searchTerm, $options: 'i' } },
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalshops = await Shop.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthshops = await Shop.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      shops,
      totalshops,
      lastMonthshops,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteshop = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this shop'));
  }
  try {
    await Shop.findByIdAndDelete(req.params.shopId);
    res.status(200).json('The shop has been deleted');
  } catch (error) {
    next(error);
  }
};
export const updateshop = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId ) {
    return next(errorHandler(403, 'You are not allowed to update this shop'));
  }
  try {
    const updatedShop = await Shop.findByIdAndUpdate(
      req.params.shopId,
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,
          image: req.body.image,
          brand:req.body.brand,
          price:req.body.price,
          disprice:req.body.disprice,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedShop);
  } catch (error) {
    next(error);
  }
};