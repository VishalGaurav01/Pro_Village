import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { FaDollerSign } from 'react-icons/fa';
// import { FaRupeeSign } from 'react-icons/fa';
// import CallToAction from '../components/CalltoAction';
// import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';
import axios from 'axios';


export default function PostPage() {
  const { postSlug } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // console.log(currentUser.id);
  if (!currentUser || !currentUser.username  || !post.userId) {
    console.error('User data is missing or invalid');
    return;
  }
    // await axios.post('/api/user/apply-notify', { userId : post.userId });
    // alert('Request sent successfully');
    const res = await fetch('/api/user/apply-notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userId:post.userId,currentUse:currentUser.username}),
    });

} catch (error) {
    console.error('Error sending request:', error);
  }
};

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

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?category=${post?.category}&limit=3`);
        const data = await res.json();

        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, [post?.category]);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        Service Profile 
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {post && post.category}
        </Button>
      </Link>
      
      <div className='flex flex-col mt-4 sm:flex-row p-3 border border-teal-500 justify-center items-center  text-center'>
        <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl text-left ml-20 pl-20' >
            Name: {post && post.title}
            </h2>
            <h2 className='text-2xl text-left ml-20 pl-20' >
            City: {post && post.city}
            </h2>
            <h2 className='text-2xl text-left ml-20 pl-20'>
            Price: 300 
            </h2>
            <h2 className='text-2xl text-left ml-20 pl-20'>
            Contact : {post && post.aadhar}
            </h2>
            <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
            <Button onClick={
              handleSubmit
            } gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                
                    Send Request
                
            </Button>
        </div>
        <div className="p-7 flex-1 object-cover overflow-hidden">
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
      {/* <div className='max-w-4xl mx-auto w-full'>
        <CallToAction />
      </div> */}
      {/* <CommentSection postId={post._id} /> */}

      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Related Profiles</h1>
        <div className='flex flex-row gap-5 mt-5 justify-center '>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}