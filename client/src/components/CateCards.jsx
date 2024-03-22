import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Rating } from 'flowbite-react';
export default function PostCard({url , type ,content}) {
  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link to={`/search?searchTerm=${type}`}>
        <img
          src={url}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-2 flex flex-col gap-2'>
            <div className='p-3 flex flex-row gap-2 justify-center'>
                <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> {type}</h1>
                <div className=' flex flex-row'>
              <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false}/>
    </Rating>
      </div>
      </div>
    <p className='text-center'>{content}</p>
              </div>
        <Link
          to={`/search?searchTerm=${type}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          View {type}
        </Link>
    </div>
  );
}
