import { Modal, Table, Button, Alert } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
export default function DashPosts() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [userShops, setUserShops] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [shopIdToDelete, setShopIdToDelete] = useState('');
  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const res = await fetch(`/api/cart/getcarts?userId=${currentUser._id}&&limit=4`);
        const data = await res.json();
        if (res.ok) {
          setUserShops(data.carts);
          if (data.carts.length < 4) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    
      fetchCarts();

  }, [currentUser?._id]);

  const handleShowMore = async () => {
    const startIndex = userShops.length;
    try {
      const res = await fetch(
        `/api/cart/getcarts?userId=${currentUser._id}&&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserShops((prev) => [...prev, ...data.carts]);
        if (data.carts.length < 4) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeletecard = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/cart/deletecart/${shopIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserShops((prev) =>
          prev.filter((shop) => shop._id !== shopIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const sumAmount = userShops.reduce((total, shop) => total + shop.quantity, 0);
  const sumTotalPrice = userShops.reduce((total, shop) => total + (shop.price * shop.quantity), 0);

  return (
    <div>
    
        <h1 className='text-3xl m-5 text-center'>Your Cart</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
    <div className='table-auto max-w-3xl pl-5 overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      
      {userShops.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head style={{ backgroundColor: 'rgba(229, 231, 235, 0.8)'}}>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Product image</Table.HeadCell>
              <Table.HeadCell>Brand</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Total</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {userShops.map((shop) => (
              <Table.Body className='divide-y'>
                <Table.Row className=' dark:border-gray-700 dark:bg-gray-800  bg-gray-200   border-gray-400'>
                  <Table.Cell>
                  {shop.title}
                  </Table.Cell>
                  <Table.Cell>
                    {/* <Link to={`/shop/${shop.slug}`}> */}
                      <img
                        src={shop.image}
                        alt={shop.title}
                        className='w-20 h-20 bg-gray-500'
                      />
                    {/* </Link> */}
                  </Table.Cell>
                  <Table.Cell>
                    {/* <Link
                      className='font-medium text-gray-900 dark:text-white'
                      to={`/shop/${shop.slug}`}
                    > */}
                      {shop.brand}
                    {/* </Link> */}
                  </Table.Cell>
                  <Table.Cell>{shop.price}</Table.Cell>
                  <Table.Cell>{shop.quantity}</Table.Cell>
                  <Table.Cell className='text-xl text-blue-400'>{shop.price*shop.quantity}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setShopIdToDelete(shop._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Remove
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <Alert>You have no product in your Cart</Alert>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to remove this item ?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeletecard}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    {/* <div className='p-3 items-center mx-auto my-auto'>
        <h2 className='text-2xl mb-4'>Summary</h2>
        <p>Total Quantity: {sumAmount}</p>
        <p>Total Price: ${sumTotalPrice.toFixed(2)}</p>
      </div> */}

<div class=" mx-auto w-96 h-96 my-auto mb-5 mt-1 items-center max-w-sm p-4  border unded-lg shadow sm:p-8 bg-gray-200 border-gray-400 dark:border-gray-700 dark:bg-gray-800">
<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Quantity: {sumAmount}</h5>
<div class="flex items-baseline text-gray-900 dark:text-white">
<span class="text-3xl font-semibold">$ </span>
<span class="text-5xl font-extrabold tracking-tight">{sumTotalPrice.toFixed(2)}</span>
{/* <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span> */}
</div>
<ul role="list" class="space-y-5 my-7">
<li class="flex items-center">
<svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Service Provider</span>
</li>
<li class="flex">
<svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Free Delivery</span>
</li>

<li class="flex line-through decoration-gray-500">
<svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span class="text-base font-normal leading-tight text-gray-500 ms-3">Additional Discount</span>
</li>
<li class="flex line-through decoration-gray-500">
<svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span class="text-base font-normal leading-tight text-gray-500 ms-3">Coupon Applied</span>
</li>

</ul>
 
 {/* <Button onClick={
            ()=>{navigate('/payment',{replace: true ,state: { price:price }});}
          } gradientDuoTone='purpleToBlue' outline>
            Buy Now
          </Button> */}
<button type="button" onClick={
            ()=>{navigate('/payment',{replace: true ,state: { price: sumTotalPrice }});}
          } class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
 focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium 
 rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Buy Now</button>

</div>
</div>
    </div>
  );
}