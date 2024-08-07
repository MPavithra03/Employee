import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'
import { Description } from '@mui/icons-material';

const Tl = () => {

  const data = [
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1',description:'dnvkjhdlflf,mfnv',start:'12/03/2024',end:'12/03/2024', Member: 'Smith', Status: 'Ongoing' }
  ];

  return (
    <>
      <h1 className='text-white text-center text-2xl font-bold drop-shadow-glow'>Team Member Dashboard</h1>
      

      <div className=' pt-4 text-white max-h-72 overflow-y-scroll scrollbar-hide border-rounded-lg border-white mx-auto'>
        <table className='border-2 min-w-full  border-rounded-lg border-white ml-auto mr-auto'>
          <thead className='text-center text-black sticky top-0 border-2 border-rounded-lg border-white bg-white'>
            <tr className='border-2 border-white'>
              <th className='border-2 border-white py-2 px-4'>Task</th>
              <th className='border-2 border-white py-2 px-4'>Description</th>
              <th className='border-2 border-white py-2 px-4'>Start date</th>
              <th className='border-2 border-white py-2 px-4'>End date</th>
              <th className='border-2 border-white py-2 px-4'>Member</th>
              <th className='border-2 border-white py-2 px-4'>Status</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {data.map((item, index) => (
              <tr key={index}>
                <td className='border-2 border-white py-2 px-4'>{item.Task}</td>
                <td className='border-2 border-white py-2 px-4'>{item.description}</td>
                <td className='border-2 border-white py-2 px-4'>{item.start}</td>
                <td className='border-2 border-white py-2 px-4'>{item.end}</td>
                <td className='border-2 border-white py-2 px-4'>{item.Member}</td>
                <td className='border-2 border-white py-2 px-4'>{item.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
        <Outlet />
    
    </>
  );
}

export default Tl;

