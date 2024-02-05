import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CallToAction from '../components/CalltoAction';
// import CommentSection from '../components/CommentSection';
// import PostCard from '../components/PostCard';

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
//   const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

//   useEffect(() => {
//     try {
//       const fetchRecentPosts = async () => {
//         const res = await fetch(`/api/post/getposts?limit=3`);
//         const data = await res.json();
//         if (res.ok) {
//           setRecentPosts(data.posts);
//         }
//       };
//       fetchRecentPosts();
//     } catch (error) {
//       console.log(error.message);
//     }
//   }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {post && post.category}
        </Button>
      </Link>
      {/* <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
      <img
        src={post && post.image}
        alt={post && post.title}
        className='mt-10 p-3 max-h-[400px] w-full object-cover'
      />
        <div >
        <h3 className='text-1xl mt-6 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        City: {post && post.city}
      </h3>
      <h3 className='text-1xl mt-6 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
       Aadhar No: {post && post.aadhar}
      </h3>
      <h3 className='text-1xl mt-6 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
       Pincode : {post && post.pinCode}
      </h3>
        {/* <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div> *
        </div>
      </div>  */}
      <div className='flex flex-col mt-4 sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            City: {post && post.city}
            </h2>
            <h2 className='text-2xl'>
            Price: 300 
            </h2>
            <h2 className='text-2xl'>
            Pincode: {post && post.pinCode}
            </h2>
            <h2 className='text-2xl'>
            Phone No : {post && post.aadhar}
            </h2>
            <p className='text-gray-500 my-2'>
            <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                    Send Request
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={post && post.image}
        alt={post && post.title} />
        </div>
    </div>
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      {/* <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div> */}
      <div className='max-w-4xl mx-auto w-full'>
        <CallToAction />
      </div>
      {/* <CommentSection postId={post._id} /> */}

      {/* <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent articles</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div> */}
    </main>
  );
}