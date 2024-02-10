import { Button, FileInput, Select,TextInput, Alert } from "flowbite-react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import { app } from '../firebase';
import 'react-quill/dist/quill.snow.css';
import {CircularProgressbar} from 'react-circular-progressbar';
import {getStorage , ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import 'react-circular-progressbar/dist/styles.css';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CreatePost() 
{
  const navigate =useNavigate();
  const [imageUploadProgress,setimageUploadProgress] =useState(null);
  const [imageUploadError,setimageUploadError] =useState(null);
  const[file,setfile] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
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
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };
    return (
<div className='p-3 max-w-3xl mx-auto min-h-screen'>
    {(!currentUser.isProvider)?
          (<>
            <h1 className='text-center text-3xl my-7 font-semibold'>Application Form</h1>
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
            placeholder='IFSC Code'
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
          <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
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
          (<p>You already have created a Profile</p>)}
</div>)}