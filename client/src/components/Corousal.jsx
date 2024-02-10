// import { Carousel } from 'flowbite-react';
// // import Photos_coro from '../../Photos_coro/'
// export default function Corousal() {
//   return (
//     <div className="h-50 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel >
//         <img  src="..\..\Photos_coro\aerial-view-business-team.jpg" alt="..." />
//         <img src="..\..\Photos_coro\female-plumber-working-fix-problems-client-s-house.jpg" alt="..." />
//         <img src="..\..\Photos_coro\full-shot-people-cleaning-office.jpg" alt="..." />
//         <img src="..\..\Photos_coro\man-electrical-technician-working-switchboard-with-fuses.jpg" alt="..." />
//         <img src="..\..\Photos_coro\sideways-woman-working-car-service.jpg" alt="..." />
//       </Carousel>
//       </div>
//   );
// }

import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function Corousal() {
  return (
    <div className="relative h-96 sm:h-128 xl:h-160 2xl:h-192">
      <Carousel className="w-full h-full">
        <img src="..\..\Photos_coro\aerial-view-business-team.jpg" alt="..." />
        <img src="..\..\Photos_coro\female-plumber-working-fix-problems-client-s-house.jpg" alt="..." />
        <img src="..\..\Photos_coro\full-shot-people-cleaning-office.jpg" alt="..." />
        {/* <img src="..\..\Photos_coro\man-electrical-technician-working-switchboard-with-fuses.jpg" alt="..." /> */}
        {/* <img src="..\..\Photos_coro\sideways-woman-working-car-service.jpg" alt="..." /> */}
      </Carousel>
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
      <div className='z-0 flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to
        <span className='px-2 ml-1 py-1 lg:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Pro
        </span>Village</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'>
          View all Profiles
        </Link>
      </div> */}
      {/* </div> */}
    </div>
  );
}
