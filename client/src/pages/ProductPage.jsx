// import React, { useState } from 'react'

// export default function ProductPage () {


//     const [images, setImages] = useState({
//         img1 : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
//         img2 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
//         img3 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
//         img4 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
//     })

//     const [activeImg, setActiveImage] = useState(images.img1)

//     const [amount, setAmount] = useState(1);


//     return (
//         <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
//             {/* <div className='flex flex-col gap-6 lg:w-2/4'>
//                 <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
//                 <div className='flex flex-row justify-between h-24'>
//                     <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
//                     <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
//                     <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
//                     <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
//                 </div>
//             </div> */}
            

// <div class="grid gap-4">
//     <div>
//         <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
//     </div>
//     <div class="grid grid-cols-5 gap-4">
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
//         </div>
//         <div>
//             <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
//         </div>
//     </div>
// </div>

//             {/* ABOUT */}
//             <div className='flex flex-col gap-4 lg:w-2/4'>
//                 <div>
//                     <span className=' text-violet-600 font-semibold'>Special Sneaker</span>
//                     <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
//                 </div>
//                 <p className='text-gray-700'>
//                 Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
//                 </p>
//                 <h6 className='text-2xl font-semibold'>$ 299.00</h6>
//                 <div className='flex flex-row items-center gap-12'>
//                     <div className='flex flex-row items-center'>
//                         <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
//                         <span className='py-4 px-6 rounded-lg'>{amount}</span>
//                         <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
//                     </div>
//                     <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Rating,Modal } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { FaCar, FaLock, FaRegCreditCard, FaRetweet, FaShieldAlt } from 'react-icons/fa';

export default function ProductPage() {
    
    const [images, setImages] = useState({
        img1: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
        img2: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        img3: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        img4: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        img5: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        img6: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    });
    const {currentUser} = useSelector(state=>state.user);
    const [activeImg, setActiveImage] = useState(images.img1);
    const [amount, setAmount] = useState(1);
    const [modal, setmodal] = useState(null);
    return (
        <div className='flex flex-col lg:flex-row gap-8 lg:items-center my-4 mx-4'>
            {/* Grid Div */}
            <div className="lg:w-1/2">
                <div class="grid gap-4">
                    <div style={{ height: '600px' }}>
                        <img class="h-full  max-w-full rounded-lg object-cover object-center cursor-pointer" onClick={() => setActiveImage(images.img1)} src={activeImg} alt=""/>
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
                    <span className='text-violet-600 font-semibold'>Special Sneaker</span>
                    <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
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
                <div class="grid grid-cols-3 gap-4 mt-3">
    <Card href="#" className="max-w-sm w-50 p-0.5">
        <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
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

                {/* <p className='text-1xl '>
                Nike's commitment to sustainability and social responsibility is evident in its use of recycled materials, 
                eco-friendly manufacturing processes, and community engagement initiatives. With a diverse range of styles, 
                colors, and customization options, Nike shoes cater to individuals of all ages, backgrounds, and interests, 
                making them a timeless symbol of athleticism and self-expression.
                </p>  */}
                {currentUser.isProvider ? (<div className='flex flex-row'>
                <h4 className='text-3xl text-yellow-300 font-semibold'>$199.00</h4>
                <h6 className='text-xl font-semibold relative'>
                <span className="line3a"></span>
                <span className="text3a">MRP:</span>
                <span className="text3a">$299.00</span>
                </h6>
                </div>):(<h4 className='text-3xl  text-yellow-300 font-semibold'>MRP: $299.00</h4>)}
                
                <div className='flex flex-row items-center gap-10'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-1 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-1 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <div className='flex flex-row gap-4 mr-10'>
                    <Link to='/#'>
            <Button gradientDuoTone='purpleToBlue' outline >
              Buy Now
            </Button>
            </Link>
            <Link to='/#'>
            <Button gradientDuoTone='purpleToBlue' outline >
              Add to Cart
            </Button>
            </Link>
            </div>
                </div>
                <hr className="line" />
                {/* <div class="grid sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2 mt-2 align-middle">
        <Link to='/notification'> 
                <div className='relative'>
                <Button className='w-12 h-10 ' color='gray' pill >
        <FaShieldAlt />
      </Button>
      <span className='flex flex-col text-blue-600'>
      <span>1 Year</span>
      <span>Warranty</span>
      </span>
    </div>
      </Link><Link to='/notification'> 
                <div className='relative'>
                <Button className='w-12 h-10 ' color='gray' pill >
        <FaRegCreditCard />
      </Button>
      <span className='flex flex-col text-blue-600'>
      <span>Cash on</span>
      <span>Delivery</span>
      </span>
    </div>
      </Link><Link to='/notification'> 
                <div className='relative'>
                <Button className='w-12 h-10 ' color='gray' pill >
        <FaRetweet />
      </Button>
    </div>
    <span className='flex flex-col text-blue-600'>
      <span>10 Days</span>
      <span>Replacement</span>
      </span>
      </Link><Link to='/notification'> 
                <div className='relative'>
                <Button className='w-12 h-10 ' color='gray' pill >
        <FaCar />
      </Button>
      <span className='flex flex-col text-blue-600'>
      <span>Free</span>
      <span>Delivery</span>
      </span>
    </div>
      </Link><Link to='/notification'> 
                <div className='relative'>
                <Button className='w-12 h-10 ' color='gray' pill >
        <FaLock/>
      </Button>
      <span className='flex flex-col text-blue-600 '>
      <span>Full</span>
      <span>Security</span>
      </span>
    </div>
      </Link>
    </div> */}
    <Modal
        show={modal===1}
        onClose={() => setmodal(false)}
        popup
        size='md'>
      <Modal.Header>
      <h2 className='text-2xl font-semibold text-center'>Electrician Services</h2>

      </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
</div>
            </div>
    );
}
