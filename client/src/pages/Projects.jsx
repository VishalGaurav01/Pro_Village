
// import { Button, Select, TextInput } from 'flowbite-react';
// import { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import ProductCard2 from '../components/ProductCard2';

// export default function Search() {
//   const [sidebarData, setSidebarData] = useState({
//     searchTerm: '',
//     sort: 'desc',
//     category: 'uncategorized',
//   });

//   console.log(sidebarData);
//   const [shops, setShops] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showMore, setShowMore] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     const sortFromUrl = urlParams.get('sort');
//     const categoryFromUrl = urlParams.get('category');
//     if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
//       setSidebarData({
//         ...sidebarData,
//         searchTerm: searchTermFromUrl,
//         sort: sortFromUrl,
//         category: categoryFromUrl,
//       });
//     }

//     const fetchShops = async () => {
//       setLoading(true);
//       const searchQuery = urlParams.toString();
//       const res = await fetch(`/api/shop/getshops?${searchQuery}`);
//       if (!res.ok) {
//         setLoading(false);
//         return;
//       }
//       if (res.ok) {
//         const data = await res.json();
//         setShops(data.shops);
//         setLoading(false);
//         if (data.shops.length === 10) {
//           setShowMore(true);
//         } else {
//           setShowMore(false);
//         }
//       }
//     };
//     fetchShops();
//   }, [location.search]);

//   const handleChange = (e) => {
//     if (e.target.id === 'searchTerm') {
//       setSidebarData({ ...sidebarData, searchTerm: e.target.value });
//     }
//     if (e.target.id === 'sort') {
//       const order = e.target.value || 'desc';
//       setSidebarData({ ...sidebarData, sort: order });
//     }
//     if (e.target.id === 'category') {
//       const category = e.target.value || 'uncategorized';
//       setSidebarData({ ...sidebarData, category });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('searchTerm', sidebarData.searchTerm);
//     urlParams.set('sort', sidebarData.sort);
//     urlParams.set('category', sidebarData.category);
//     const searchQuery = urlParams.toString();
//     navigate(`/shop?${searchQuery}`);
//   };

//   const handleShowMore = async () => {
//     const numberOfShops = shops.length;
//     const startIndex = numberOfShops;
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('startIndex', startIndex);
//     const searchQuery = urlParams.toString();
//     const res = await fetch(`/api/shop/getshops?${searchQuery}`);
//     if (!res.ok) {
//       return;
//     }
//     if (res.ok) {
//       const data = await res.json();
//       setShops([...shops, ...data.shops]);
//       if (data.shops.length === 10) {
//         setShowMore(true);
//       } else {
//         setShowMore(false);
//       }
//     }
//   };

//   return (
//     <div className='flex flex-col md:flex-row'>
//       <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
//         <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
//           <div className='flex   items-center gap-2'>
//             <label className='whitespace-nowrap font-semibold'>
//               Search Term:
//             </label>
//             <TextInput
//               placeholder='Search...'
//               id='searchTerm'
//               type='text'
//               value={sidebarData.searchTerm}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='flex items-center gap-2'>
//             <label className='font-semibold'>Sort by Price:</label>
//             <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
//               <option value='dsc'>High-to-Low</option>
//               <option value='asc'>Low-to-High</option>
//             </Select>
//           </div>
//           <div className='flex items-center gap-2'>
//             <label className='font-semibold'>Category:</label>
//             <Select
//               onChange={handleChange}
//               value={sidebarData.category}
//               id='category'
//             >
//               <option value='uncategorized'>Uncategorized</option>
//               <option value='electrician'>Electrician</option>
//               <option value='plumber'>Plumber</option>
//               <option value='cleaner'>Cleaner</option>
//               <option value='mechanic'>Mechanic</option>
//               <option value='carpenter'>Carpenter</option>
//               <option value='beauticians'>Beauticians</option>
//             </Select>
//           </div>
//           <Button type='submit' outline gradientDuoTone='purpleToPink'>
//             Apply Filters
//           </Button>
//         </form>
//       </div>
//       <div className='w-full'>
//         <h1 className='text-3xl font-semibold text-center bg-gradient-to-b dark:from-[rgb(8,46,77)] to-white from-teal-700 dark:to-[rgb(16,23,42)]  p-10 mt-0 '>
//           Products Section
//         </h1>
//         <div className='p-5 flex flex-wrap gap-4 '>
//           {!loading && shops.length === 0 && (
//             <p className='text-xl text-gray-500'>No result found.</p>
//           )}
//           {loading && <p className='text-xl text-gray-500'>Loading...</p>}
//           {!loading &&
//             shops &&
//             shops.map((shop) => <ProductCard2 key={shop._id} shop={shop} />)}
//           {showMore && (
//             <button
//               onClick={handleShowMore}
//               className='text-teal-500 text-lg hover:underline p-7 w-full'
//             >
//               Show More
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard2 from '../components/ProductCard2';

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });
  const [sidebarVisible, setSidebarVisible] = useState(false); // State to control sidebar visibility

  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchShops = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/shop/getshops?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setShops(data.shops);
        setLoading(false);
        if (data.shops.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchShops();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === 'category') {
      const category = e.target.value || 'uncategorized';
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/shop?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfShops = shops.length;
    const startIndex = numberOfShops;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/shop/getshops?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setShops([...shops, ...data.shops]);
      if (data.shops.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className='flex'>
      {/* Sidebar */}
      {sidebarVisible && (
        <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
          <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
            <div className='flex items-center gap-2'>
              <label className='whitespace-nowrap font-semibold'>Search Term:</label>
              <TextInput
                placeholder='Search...'
                id='searchTerm'
                type='text'
                value={sidebarData.searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className='flex items-center gap-2'>
              <label className='font-semibold'>Sort by Price:</label>
              <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
                <option value='dsc'>High-to-Low</option>
                <option value='asc'>Low-to-High</option>
              </Select>
            </div>
            <div className='flex items-center gap-2'>
              <label className='font-semibold'>Category:</label>
              <Select onChange={handleChange} value={sidebarData.category} id='category'>
                <option value='uncategorized'>Uncategorized</option>
                <option value='electrician'>Electrician</option>
                <option value='plumber'>Plumber</option>
                <option value='cleaner'>Cleaner</option>
                <option value='mechanic'>Mechanic</option>
                <option value='carpenter'>Carpenter</option>
                <option value='beauticians'>Beauticians</option>
              </Select>
            </div>
            <Button type='submit' outline gradientDuoTone='purpleToPink'>
              Apply Filters
            </Button>
          </form>
        </div>
      )}

      {/* Main content */}
      <div className='w-full'>
       
        <h1 className='text-3xl flex flex-row font-semibold text-center bg-gradient-to-b dark:from-[rgb(8,46,77)] to-white from-teal-700 dark:to-[rgb(16,23,42)] p-10 mt-0'>
  <Button 
    onClick={() => setSidebarVisible(!sidebarVisible)}
    outline>
    {sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
  </Button>
  <span className="flex-grow text-center font-bold text-4xl">Product Section</span>
</h1>
        <div className='p-5 flex flex-wrap gap-5 justify-center'>
          {!loading && shops.length === 0 && <p className='text-xl text-gray-500'>No result found.</p>}
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading && shops && shops.map((shop) => <ProductCard2 key={shop._id} shop={shop} />)}
          {showMore && (
            <button onClick={handleShowMore} className='text-teal-500 text-lg hover:underline p-7 w-full'>
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
