import { Modal, Table, Button , Alert} from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { deleteUserNotification } from '../redux/user/userSlice';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
// import { updateSuccess } from '../redux/user/userSlice';
export default function Notice() {
  const { currentUser } = useSelector((state) => state.user);
  const [notificationToDelete, setNotificationToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAccept, setShowAccept] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      setShowModal(false);
      
      if (notificationToDelete) {
        const res = await fetch(
          `/api/user/delete-notify`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: currentUser._id,
              notificationId: notificationToDelete._id, // Pass the notification ID to delete
            }),
          }
        );
        const data = await res.json();
        if (!res.ok) {
          console.error(data.message);
        } else {
          console.log('Notification deleted successfully');
          // dispatch(deleteUserNotification(notificationToDelete._id));
        }
      // dispatch(updateSuccess(updatedCurrentUser));

      } else {
        console.error('Notification to delete is null');
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
  const handleSubmit = async () => {
    try {
      if (!currentUser || !currentUser.username || !notificationToDelete) {
        console.error('User data is missing or invalid');
        return;
      }
  
      setLoading(true);
  
      const currentDate = new Date();
      const dateTimeString = currentDate.toLocaleString('en-IN');
  
      const res = await fetch('/api/user/accept-notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: notificationToDelete.data.userId,
          fore: notificationToDelete.data.fore,
          currentUse: currentUser.username,
          sendId: currentUser._id,
          datetime: dateTimeString,
        }),
      });
  
      if (!res.ok) {
        setError(true);
      } else {
        setError(false);
      }
  
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error('Error in handleSubmit:', error);
    }
  };
  
  return (
    <div className='table-auto overflow-x-scroll  md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser?.notification?.length>0 ? (
        <><Table hoverable className='shadow-md'>
  <Table.Head>
  <Table.HeadCell>Date & Time</Table.HeadCell>
  <Table.HeadCell>Message</Table.HeadCell>
    <Table.HeadCell>Category</Table.HeadCell>
    <Table.HeadCell>User ID</Table.HeadCell>
    <Table.HeadCell>Delete</Table.HeadCell>
    <Table.HeadCell>Accept or Decline</Table.HeadCell>
  </Table.Head>
  <Table.Body className='divide-y'>
    {currentUser.notification.map((notification, index) => (
      <Table.Row key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
  <Table.Cell>{notification.data ? notification.data.datetime : 'N/A'}</Table.Cell>
  <Table.Cell>{notification.message}</Table.Cell>
  <Table.Cell>{notification.data ? notification.data.fore : 'N/A'}</Table.Cell>
  <Table.Cell>{notification.data ? notification.data.userId : 'N/A'}</Table.Cell>
  <Table.Cell>
    <span
      onClick={() => {
        setNotificationToDelete(notification);
        setShowModal(true);
      }}
      className='font-medium text-red-500 hover:underline cursor-pointer'
    >
      Delete
    </span>
  </Table.Cell>
  <Table.Cell>
    <span
      onClick={() => {
        setNotificationToDelete(notification);
        setShowAccept(true);
      }}
      className='font-medium text-blue-500 hover:underline cursor-pointer'
    >
      Accept/Decline
    </span>
  </Table.Cell>
</Table.Row>
    ))}
     
  </Table.Body>
</Table>
        </>
      ) : (
        <Alert className='mt-2' color='failure'>
        You have no notification yet!
          </Alert>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'>
      <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this notification?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDelete}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showAccept}
        onClose={() => setShowAccept(false)}
        popup
        size='md'>
      <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to accept the job?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleSubmit}>
                Accept
              </Button>
              <Button color='gray' onClick={() => setShowAccept(false)}>
                Decline
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}