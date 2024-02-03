import { Button, FileInput, Select,TextInput } from "flowbite-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function CreatePost() {
    return (
        <div className='p-3 max-w-3xl mx-auto min-h-screen'>
          <h1 className='text-center text-3xl my-7 font-semibold'>Create a Card</h1>
          <form className='flex flex-col gap-4' >
          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Name'
            className="flex-1"/>
            <Select>
                <option value="uncategorized">Select a Category</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="cleaner">Cleaner</option>
                <option value="mechanic">Mechanic</option>
            </Select>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
            type='location'
            placeholder='City'
            required id='city'
            className="flex-1"/>
            <TextInput
            type='number'
            placeholder='Pin Code'
            className="flex-1"/> 
            </div>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
            type='number'
            placeholder='Aadhar Number'
            className="flex-1"/> 
            {/* <div inline-datepicker data-date="02/25/2022"></div> */}
            {/* <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/> */}
            <TextInput
            type='number'
            placeholder='IFSC Code'
            className="flex-1"/> 
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
            accept='image/*'/>
             <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline>Upload Image</Button>
            </div>
            <ReactQuill
          theme='snow'
          placeholder='Work Experience'
          className='h-72 mb-12'
        //   required
        //   onChange={(value) => {
        //     setFormData({ ...formData, content: value });
        //   }}
        />
        <Button type='submit' gradientDuoTone='purpleToPink'>
          Publish
        </Button>
            </form>
          </div>
)}