import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function Notice() {
  const { currentUser } = useSelector((state) => state.user);
  const [notificationToDelete, setNotificationToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAccept, setShowAccept] = useState(false);

  const handleDelete = async () => {}
  const handleSubmit = async () => {}
 
  return (
    <div className='table-auto overflow-x-scroll  md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser.notification ? (
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
                        setShowModal(true);
                        setNotificationToDelete(notification);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowAccept(true);
                      }}
                      className='font-medium text-blue-500 hover:underline cursor-pointer'
                    >
                      Accept/Decline
                    </span>
                  </Table.Cell>
        {/* <Table.Cell> */}
      </Table.Row>
    ))}
  </Table.Body>
</Table>
        </>
      ) : (
        <p>You have no posts yet!</p>
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