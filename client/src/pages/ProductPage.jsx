import React from 'react';
import { Rating,Modal } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCar, FaCheck, FaCheckCircle, FaLock, FaRegCreditCard, FaRetweet, FaShieldAlt } from 'react-icons/fa';
export default function ProductPage() {
    const { shopSlug } = useParams();
    const { currentUser } = useSelector((state) => state.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [shop, setShop] = useState(null); 
    const [recentShops, setRecentShops] = useState(null);
    const [recent, setrecent]= useState(true);
    const navigate = useNavigate();
    const [price, setPrice]=useState("");
    const [images, setImages] = useState({
        img2: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        img3: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        img4: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        img5: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        img6: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    });
    const [activeImg, setActiveImage] = useState(null);
    // const {currentUser} = useSelector(state=>state.user);
    const [amount, setAmount] = useState(1);
    // const [modal, setmodal] = useState(null);
    useEffect(() => {
        const fetchShop = async () => {
          try {
            setLoading(true);
            const res = await fetch(`/api/shop/getshops?slug=${shopSlug}`);
            const data = await res.json();
            if (!res.ok) {
              setError(true);
              setLoading(false);
              return;
            }
            if (res.ok) {
              setShop(data.shops[0]);
              setActiveImage(data.shops[0]?.image);
              setLoading(false);
              setError(false);
              setPrice(data.shops[0].price);
            }
          } catch (error) {
            setError(true);
            setLoading(false);
          }
        };
        fetchShop();
      }, [shopSlug]);

      const handleAddToCart = async () => {
        try {
          const response = await fetch('/api/cart/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                slug: shop.slug,
                title: shop.title,
                brand: shop.brand,
                disprice: shop.disprice,
                category: shop.category,
                price: shop.price,
                content: shop.content,
                userId: currentUser._id, 
                quantity: amount,
                image: shop.image,
            }),
          });
          if (response.ok) {
          } else {
            console.error('Failed to add item to cart');
          }
        } catch (error) {
          console.error('Failed to add item to cart:', error.message);
        }
      };
    return (
        <div className='flex flex-col lg:flex-row gap-8 lg:items-center my-4 mx-4'>
            {/* Grid Div */}
            <div className="lg:w-1/2">
                <div class="grid gap-4">
                    <div style={{ height: '600px' }}>
                        <img class="h-full  w-full rounded-lg object-center cursor-pointer" onClick={() => setActiveImage(shop?.image)} src={activeImg} alt=""/>
                    </div>
                    <div class="grid grid-cols-5 gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg cursor-pointer"  onClick={() => setActiveImage(images.img2)} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg cursor-pointer"  onClick={() => setActiveImage(images.img3)} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg cursor-pointer" onClick={() => setActiveImage(images.img4)} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg cursor-pointer"  onClick={() => setActiveImage(images.img5)} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg cursor-pointer"  onClick={() => setActiveImage(images.img6)} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* About Div */}
            <div className='flex flex-col gap-2 lg:w-1/2'>
                <div>
                    <span className='text-violet-600 font-semibold'>{shop && shop.brand}</span>
                    <h1 className='text-3xl font-bold'>{shop && shop.title}</h1>
                    <hr className="line" />

<div class="flex items-center mb-2 " >
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.05</p>
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
</div>
<p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">5 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style={{width: '70%'}}></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">4 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style={{width: '17%'}}></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">3 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style={{width: '8%'}}></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">2 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style={{width: '4%'}}></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">1 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style={{width: '1%'}}></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
</div>      
                </div>
                <hr className="line" />
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 ">
    <Card href="#" className="max-w-sm w-50 p-0.5 ">
        <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white ">
            Bank Offers
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
Upto ₹750.00 discount on select Credit Cards, Bank…
        </p>
        <a href='#' className='text-blue hover:text-red'>5 offers</a>
    </Card>
    <Card href="#" className="max-w-sm w-50 p-0.5">
        <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
            No Cost EMI
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Upto ₹351.20 EMI interest savings on Amazon Pay ICICI…
        </p>
        <a href='#' className='text-blue hover:text-red'>1 offer</a>
    </Card>
    <Card href="#" className="max-w-sm w-50 p-0.5">
        <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cashback
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Subscription Rewards - Shop and Get rewards worth…
        </p>
        <a href='#' className='text-blue hover:text-red'>1 offer</a>
    </Card>
</div>
<hr className="line" />

                {(currentUser?.isProvider || currentUser?.isAdmin) ? (<div className='flex flex-row'>
                <span class="ms-3 text-3xl dark:text-yellow-300 font-medium pr-2 ">${shop && shop.disprice}</span>
                <span class="text-lg font-medium text-gray-900 line-through dark:text-white"> ${shop && shop.price}</span>
                
                <span class="ms-3 text-3xl mt-1 text-blue-600 font-medium pr-2 "><FaCheckCircle/></span>
                </div>):(<span class="ms-3 text-3xl dark:text-yellow-300 font-medium pr-2 ">${shop && shop.price}</span>)}
                
                <div className='flex flex-row items-center gap-10'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-1 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-1 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <div className='flex flex-row gap-4 mr-10'>
                    <Button onClick={
            ()=>{navigate('/payment',{replace: true ,state: { price:price }});}
          } gradientDuoTone='purpleToBlue' outline>
            Buy Now
          </Button>
            <Link to='/cart'>
            <Button gradientDuoTone='purpleToBlue'
            onClick={handleAddToCart}
             outline >
              Add to Cart
            </Button>
            </Link>
            </div>
        </div>
        <hr className="line" />

</div>
            </div>
    );
}
