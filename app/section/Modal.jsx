"use client";

import React,{useState, useEffect} from 'react';
import axios from "axios";
import Link from 'next/link';
import {PropertyProps} from '../constants'
import Property from './Property';

// import {propertyProps} from '../constants';

const Modal = () => {
  const [locationDropdownValue, setLocationDropdownValue] = useState("");
  const [priceDropdownValue, setPriceDropdownValue] = useState("");
  const [areaDropdownValue, setAreaDropdownValue] = useState("");
  const [propertyTypeDropdownValue, setPropertyTypeDropdownValue] = useState("");
  const [bedroomDropdownValue, setBedroomDropdownValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleLocationDropdownChange = (e) => {
    setLocationDropdownValue(e.target.value);
  };

  const handlePriceDropdownChange = (e) => {
    setPriceDropdownValue(e.target.value);
  };

  const handleAreaDropdownChange = (e) => {
    setAreaDropdownValue(e.target.value);
  };

  const handlePropertyTypeDropdownChange = (e) => {
    setPropertyTypeDropdownValue(e.target.value);
  };

  const handleBedroomDropdownChange = (e) => {
    setBedroomDropdownValue(e.target.value);
  };

  const handleSearch = async () => {
    const query = new URLSearchParams({
      location: locationDropdownValue,
      price: priceDropdownValue,
      area: areaDropdownValue,
      property_type: propertyTypeDropdownValue,
      bedroom: bedroomDropdownValue,
    });

    const response = await axios.get(
      `https://localhost:8000/houses?${query.toString()}`
    );

    setFilteredData(response.data);
  };

  return (
    <div>
    <div className='py-8 px-8 flex space-x-10 justify-center'>
    
      <select
        value={locationDropdownValue}
        onChange={handleLocationDropdownChange}
        className="w-48 border-transparent border outline-none rounded-none"
      >
        <option value="">Location</option>
        <option value="Kuje">Kuje</option>
         <option value="Kubwa">Kubwa</option>
          <option value="lugbe">Lugbe</option>
           <option value="Gwagwalada">Gwagwalada</option> 
           <option value="Katampe">Katampe</option>
           <option value="Garki">Garki</option>

       
      </select>

      <select
        value={priceDropdownValue}
        onChange={handlePriceDropdownChange}
        className="w-48 border-transparent outline-none border rounded-none"
      >
        <option value="">Price Range</option>
        <option value="100000">100,000+</option>
        <option value="200000">200,000+</option>
      </select>

      <select
        value={areaDropdownValue}
        onChange={handleAreaDropdownChange}
        className="w-48 border-transparent outline-none  border rounded-none"
      >
        <option value="">Area</option>
        <option value="100">100+</option>
        <option value="200">200+</option>
      </select>

      <select
        value={propertyTypeDropdownValue}
        onChange={handlePropertyTypeDropdownChange}
        className="w-48 border-transparent border outline-none  rounded-none"
      >
        <option value="">Property Type</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
      </select>

      <select
        value={bedroomDropdownValue}
        onChange={handleBedroomDropdownChange}
        className="w-48 border-transparent outline-none border rounded-none"
      >
        <option value="">Bedroom</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
<Link href='/Property'>
      <button onClick={handleSearch} className="px-8 text-white py-4 border border-white bg-[#B1935C] flex flex-end">Search</button>
      </Link>
     
</div>
    </div>
  );
};

export default Modal;

//       </select>
//   );
// };





//   const handleSearch = async () => {
//     const query = new URLSearchParams({
//       location: locationDropdownValue,
//       price: priceDropdownValue,
//       area: areaDropdownValue,
//       property_type: propertyTypeDropdownValue,
//       bedroom: bedroomDropdownValue,
//     });

//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/users?${query.toString()}`
//     );

//     setFilteredData(response.data);
//   };

//   return (
    

//       <select
//         value={priceDropdownValue}
//         onChange={handlePriceDropdownChange}
//       >
//         <option value="">All</option>
//         <option value="100000">100,000+</option>
//         <option value="200000">200,000+</option>
//       </select>

//       <select
//         value={areaDropdownValue}
//         onChange={handleAreaDropdownChange}
//       >
//         <option value="">All</option>
//         <option value="100">100+</option>
//         <option value="200">200+</option>
//       </select>

//       <select
//         value={propertyTypeDropdownValue}
//         onChange={handlePropertyTypeDropdownChange}
//       >
//         <option value="">All</option>
//         <option value="house">House</option>
//         <option value="apartment">Apartment</option>
//       </select>

//       <select
//         value={bedroomDropdownValue}
//         onChange={handleBedroomDropdownChange}
//       >
//         <option value="">All</option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//       </select>

//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default FilterComponent;



//   const [location,setLocation] = useState("");
// const [price,setPrice] = useState("");
// const [land,setLand] = useState("");
// const [house,setHouse] = useState("");
// const [property,setProperty] = useState(null);
//   const [data, setData] = useState([]);
//   const [selectedFilter, setSelectedFilter] = useState('all');

//   useEffect(() => {
//     fetchData(selectedFilter);
//   }, [selectedFilter]);

//   const fetchData = async (filter) => {
//     try {
//       const response = await fetch(`http://localhost:8000/houses/data?catergory=${filter}`);
//       if (response.ok) {
//         const data = await response.json();
//         setData(data);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const filterHandler =()=>{
//     setProperty(()=>{
//       return [{location:location,price:price, bedroom:bedroom, area:area}]
//     })
//     }
// return (
//    <section className="mt-2">
//     <div className=" flex-1 border flex justify-around space-x-10  ">
     
//     {
//       propertyProps?.map((item,i) => (
//         <div key={i}>
//           <label htmlFor="dropdown">{item.title} </label>
//         <select id="dropdown" value="" className='w-20'>
//         <option value="">{item?.title}</option>
//         <option  value="">{item?.option?.values}</option>
       
//       </select>
//       </div>
//       ))
    
//     }
//     </div>

   
//    </section>

//   )
// }


