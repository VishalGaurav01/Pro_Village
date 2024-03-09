import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function CallToAction() {
  return (
    // <div className='flex flex-col sm:flex-row p-3 mx-10 mt-10 border border-teal-500 justify-center 
    // items-center rounded-tl-3xl rounded-br-3xl text-center bg-gradient-to-l '>
    //     <div className="flex-1 justify-center flex flex-col">
    //         <h2 className='text-2xl'>
    //         Elevate your shopping experience, one click at a time.
    //         </h2>
    //         <p className='text-gray-500 my-2'>
    //         Embark on a journey where convenience meets choice, and elevate your shopping experience to new heights.
    //         </p>
    //         <div className='flex flex-row gap-5 p-3 justify-center '>
    //         <Link to='/Project'>
    //         <Button gradientDuoTone='purpleToBlue' outline  className='w-52'>
    //           Shop
    //         </Button>
    //       </Link>
    //       <Link to='/About'>
    //         <Button gradientDuoTone='purpleToBlue' outline  className='w-52'>
    //           Know More
    //         </Button>
    //       </Link>
    //       </div>
    //     </div>
    //     <div className="p-2 flex-1">
    //         <a href='/Project'><img src="../../Photos_coro/pagea7.jpg" className='rounded-lg' /></a>
    //     </div>
    // </div>
    <div className='flex flex-col sm:flex-row p-3 mx-10 mt-10 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-gradient-to-l'>
    <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
            Elevate your shopping experience, one click at a time.
        </h2>
        <p className='text-gray-500 my-2'>
            Embark on a journey where convenience meets choice, and elevate your shopping experience to new heights.
        </p>
        <div className='flex flex-col sm:flex-row gap-5 p-3 justify-center'>
            <Link to='/Project'>
                <Button gradientDuoTone='purpleToBlue' outline className='w-full sm:w-52 mb-3 sm:mb-0'>
                    Shop
                </Button>
            </Link>
            <Link to='/About'>
                <Button gradientDuoTone='purpleToBlue' outline className='w-full sm:w-52'>
                    Know More
                </Button>
            </Link>
        </div>
    </div>
    <div className="p-2 flex-1">
        <a href='/Project'><img src="../../Photos_coro/pagea7.jpg" className='rounded-lg w-full' alt="product"/></a>
    </div>
</div>

  )
}