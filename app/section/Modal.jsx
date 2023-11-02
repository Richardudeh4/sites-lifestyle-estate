"use client";
import React from 'react';
import {useState, useEffect} from 'react';
import Property from './Property';
import {propertyProps} from '../constants';


const Modal = async (filter) => {
  
  const [data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    fetchData(selectedFilter);
  }, [selectedFilter]);

  const fetchData = async (filter) => {
    try {
      const response = await fetch(`http://localhost:3000/houses/data?catergory=${filter}`);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
   <section className="mt-10">
    <div className=" flex-1 border border-l-2 flex justify-center space-x-10 border-l-slate-300 ">
    {
      propertyProps.map((item,i) => (
        <div key={i}>
          <h1 className="font-semibold mt-6 text-center">{item.name}</h1>
          <div className="pt-10">
    <select 
    placeholder='Select option'
    id="filterSelect"
    value={selectedFilter}
    onChange={(e) => setSelectedFilter(e.target.value)}
    >
<option value="all">All</option>
<option value='option1' >{item.property.item1}</option>
<option value='option2'>{item.property.item2}</option>
<option value='option3' >{item.property.item3}</option>
</select>
</div>
 </div>
      ))
    }
    </div>

    <div id="filteredData">
        {data.map((item) => (
          <div key={item.id}>
        <h1>{item.area}</h1>
          </div>
        ))}
      </div>
   </section>

  )
}

export default Modal
