import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {Vector} from '../assets'
import Button from '../component/Button'
const Property = ({img, area, location, bedroom, floor,price, floorPlan}) => {
    return(
        <section
        className="px-12 py-16"
        >
            <div className="flex justify-between mt-10">
            <h1 className="font-bold text-2xl font-sans">Found 21 Units</h1>

    <div className="mt-8 grid-cols-2 md:grid-cols-3 gap-10">
        <div className="py-10 px-8 bg-slate-400">

    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Any
        </InputLabel>
        <NativeSelect
          defaultValue={1}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={1}>1 Bedroom</option>
          <option value={2}>2 Bedroom</option>
          <option value={3}>3 Bedroom</option>
        </NativeSelect>
      </FormControl>
    </Box>
    
 </div>

 

<div className="p-0">
                <input placeholder="Search by Name" className="placeholder:text-gray-300 w-20 border-b border-b-[#B1935C] pl-2"/>
                <Button label="Search" iconUrl={vector} />
            </div>
            </div>
            </div>





            <div className="px-10 py-12 bg-[#D9D9D9] ">
                {
             propertyProps.map((item,i) => (
             <div key={i}>
    <select placeholder='Select option'>
  <option value='option1'>{location}</option>
  <option value='option2'>{price}</option>
  <option value='option3'>{floorPlan}</option>
</select>
                        </div>
                    ))
                }

            <Button label="Search" iconUrl={Vector} />
            </div>
        </section>
    )
}
export default Property 