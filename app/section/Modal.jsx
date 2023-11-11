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
        <option value="150000000">(NGN)150 Million</option>
<option value="250000000">(NGN)250 Million</option>
<option value="220000000">(NGN)220 Million</option>
 <option value="35500000">(NGN)35.5 Million</option>
<option value="4500000">(NGN) 4.5 Million</option>
<option value="3500000">(NGN) 3.5 Million</option>
<option value="5000000">(NGN) 5 Million</option>
<option value="6500000">(NGN) 6.5 Million</option>
<option value="7500000">(NGN) 7.5 Million</option>
<option value="7200000">(NGN) 7.2 Million</option>
<option value="15000000">(NGN) 15 Million</option>
<option value="4500000">(NGN) 4.5 Million</option>
<option value="8750000">(NGN) 8.75 Million</option>
<option value="7500000">(NGN) 7.5 Milliion</option>
<option value="7200000">(NGN) 7.2 Million</option>
<option value="15000000">(NGN) 15 Million</option>
<option value="4500000">(NGN) 4.5 Million</option>
<option value="8750000">(NGN) 8.75 Million</option>
<option value="2380000">(NGN) 2.38 Million</option>
<option value="3150000">(NGN) 3.15 Million</option>
 {/* 7500000
7200000
15000000
4500000
 8750000
2380000
3150000 */}
    
      </select>

      <select
        value={areaDropdownValue}
        onChange={handleAreaDropdownChange}
        className="w-48 border-transparent outline-none  border rounded-none"
      >
        <option value="">Area</option>
        <option value="250">250</option>
        <option value="300">300</option>
        <option value="355">355 Square feet</option>
        <option value="1200">1200 Square feet</option>
          <option value="1225">1225 Square feet</option>
          <option value="1500">1500 Square feet</option>
          <option value="2400">2400 Square feet</option>
            <option value="355">355 Square feet</option>
            <option value="2500">2500 Square feet</option>
            <option value="3200">3200 Square feet</option>
            <option value="3700">3700 Square feet</option>
            <option value="4500">4500 Square feet</option>
            <option value="5000">5000 Square feet</option>
            <option value="5300">5300 Square feet</option>
            <option value="5500">5500 Square feet</option>
            <option value="5600">5600 Square feet</option>
            <option value="6500">6500 Square feet</option>
             <option value="7000">7000 Square feet</option>
      </select>

      <select
        value={propertyTypeDropdownValue}
        onChange={handlePropertyTypeDropdownChange}
        className="w-48 border-transparent border outline-none  rounded-none"
      >
        <option value="">Property Type</option>
        <option value="Apartment">Apartment</option>
        <option value="Duplex">Duplex</option>
        <option value="Flat">Flat</option>
          <option value="Land">Land</option>
          <option value="Storey Building">Storey Building</option>
          
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
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
   
      </select>
 <button onClick={handleSearch} className="px-8 text-white py-4 border border-white bg-[#B1935C] flex flex-end">Search</button>
   <div>
    {filteredData?.length > 0 && filteredData?.map((item,i)=> (
      <div key={i}>
<h1 className="text-center">{item.location}</h1>
      </div>
    ))}
    </div> 
     
</div>
    </div>
  );
};

export default Modal;









