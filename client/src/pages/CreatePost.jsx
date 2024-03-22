import { Button, FileInput, Select,TextInput, Alert } from "flowbite-react";
import { useState , useEffect} from "react";
import ReactQuill from 'react-quill';
import { app } from '../firebase';
import 'react-quill/dist/quill.snow.css';
import {CircularProgressbar} from 'react-circular-progressbar';
import {getStorage , ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import 'react-circular-progressbar/dist/styles.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateSuccess } from "../redux/user/userSlice";
export default function CreatePost() 
{
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const [imageUploadProgress,setimageUploadProgress] =useState(null);
  const [imageUploadError,setimageUploadError] =useState(null);
  const[file,setfile] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message);
        }
        setUserPosts(data.posts);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };

    fetchUserPosts();
  }, [currentUser._id]);



  const[formData,setFormData]=useState({}); 
  const [publishError, setPublishError] = useState(null);
  // console.log(formData);
  const handleUpdloadImage = async () => {
    try {
      if (!file) {
        setimageUploadError('Please select an image');
        return;
      }
      setimageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setimageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setimageUploadError('Image upload failed');
          setimageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setimageUploadProgress(null);
            setimageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setimageUploadError('Image upload failed');
      setimageUploadProgress(null);
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedCurrentUser = { ...currentUser, isProvider: true };

    const updateRes = await fetch(`/api/user/update/${currentUser._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCurrentUser),
    });
    const updateData = await updateRes.json();

    if (!updateRes.ok) {
      throw new Error(updateData.message);
    }
    else{
      dispatch(updateSuccess(updatedCurrentUser));
    }
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        // dispatch(updateSuccess(updatedCurrentUser));
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };
    return (
      <div>
{/* <div className="absolute left-0 py-12 top-10 w-full bg-gradient-to-b dark:from-blue-900 to-white from-teal-700 dark:to-[rgb(16,23,42)] "></div> */}
<div className='p-3 max-w-3xl mx-auto min-h-screen' style={{ zIndex: -1 }}>
    {(!currentUser.isProvider || currentUser.isAdmin || userPosts.length==0)?
          (<>
            <h1 className='m-5 text-center mb-9 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl '>Application Form</h1>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Name'
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            />
            <Select  onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            >
                <option value="uncategorized">Select a Category</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="cleaner">Cleaner</option>
                <option value="mechanic">Mechanic</option>
                <option value='carpenter'>Carpenter</option>
                <option value='beauticians'>Beauticians</option>
            </Select>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
            type='text'
            placeholder='City'
            required id='city'
            className="flex-1"  onChange={(e) => setFormData({...formData, city: e.target.value})}/>
            <TextInput
            type='number'
            placeholder='Pin Code'
            className="flex-1" onChange={(e) => setFormData({...formData, pinCode: e.target.value})}/> 
            </div>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
            type='number'
            placeholder='Aadhar Number'
            className="flex-1" onChange={(e) => setFormData({...formData, aadhar: e.target.value})} /> 
            {/* <div inline-datepicker data-date="02/25/2022"></div> */}
            {/* <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/> */}
            <TextInput
            type='text'
            placeholder='Phone Number'
            className="flex-1" onChange={(e) => setFormData({...formData, ifsc: e.target.value})}/> 
            </div>
            {/* <div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div> */}
  {/* <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div> */}
          <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3 '>
          <FileInput
            type='file'
            accept='image/*'
            onChange={(e) => setfile(e.target.files[0])}
            />
            <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
            onClick={handleUpdloadImage}
            disabled={imageUploadProgress}>
            {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )}
            </Button>
            </div>
            {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover'
          />
        )}
            <ReactQuill
          theme='snow'
          placeholder=' Complete Address and Work Experience '
          className='h-72 mb-12'
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type='submit' gradientDuoTone='purpleToPink'>
          Create
        </Button>
        {publishError && (
          <Alert className='mt-2' color='failure'>
            {publishError}
          </Alert>
        )}
          </form>
          </>)
          :
          (<Alert className='mt-2' color='failure'>
          You have already created a Profile
          </Alert>)}
</div>
</div>)}