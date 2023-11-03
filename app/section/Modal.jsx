"use client";
import React from 'react';
import {useState, useEffect} from 'react';
import Property from './Property';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {propertyProps} from '../constants';


const Modal = () => {
  
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
   <section className="mt-2">
    <div className=" flex-1 border flex justify-around space-x-10  ">
    {
      propertyProps.map((item,i) => (
        <div key={i}>
      <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel id="demo-select-small-label">{item.name}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="filteredData"
        value={selectedFilter}
        label="items"
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        
         
    {/* <select 
    placeholder='Select option'
    id="filterSelect"
    value={selectedFilter}
  
    > */}
    
    <MenuItem value="">
          <em>All</em>
        </MenuItem>
        <MenuItem value='option1'>{item.property.item1}</MenuItem>
        <MenuItem value= 'option2'>{item.property.item2}</MenuItem>
        <MenuItem value= 'option3'>{item.property.item3}</MenuItem>
      </Select>
{/* <option value="all">All</option>
<option value='option1' >{item.property.item1}</option>
<option value='option2'>{item.property.item2}</option>
<option value='option3' >{item.property.item3}</option>
</select> */}

</FormControl>
 </div>
      ))
    }
    </div>

    <div id="filteredData">
        {data.map(({image, area, location,price},i) => (
          <div key={i}>
       <Property image={image} area={area} location={location} price={price}/>
          </div>
        ))}
      </div>
   </section>

  )
}

export default Modal






