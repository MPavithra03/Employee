import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'
const Manager = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle(current => !current);
  }

  const data = [
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing' }
  ];

  return (
    <>
      <h1 className='text-white text-center text-2xl font-bold drop-shadow-glow'>Task Management Dashboard</h1>
      <div className='text-right pb-3 pt-3 w-full h-16 flex flex-row-reverse'>
        <Button ripple={true} onClick={handleClick} className=" bg-sky-800 px-4 text-white py-2 font-medium rounded-md">+Add</Button>
        {isToggle && (
          <div className='relative'>
            <div className='absolute top-0 right-0 text-right flex w-2/3 border-rounded-2xl border-white ml-auto mr-auto justify-end text-white'>
              <div>
                <button className='py-1 px-4'>
                  <Link to="/addtl">Team Leader</Link>
                </button>
              </div>
              <div>
                <button className='py-1 px-4'>
                  <Link to="/addtask">Add Task</Link>
                </button>
              </div>
              <div>
                <button className='py-1 px-4'>
                  <Link to="/addtm">Team Member</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='  text-white max-h-72 overflow-y-scroll scrollbar-hide border-rounded-lg mx-auto'>
        <table className='border-2 min-w-full  border-rounded-lg border-white ml-auto mr-auto'>
          <thead className='text-center text-black sticky top-0 border-2 border-rounded-lg border-white bg-white'>
            <tr className='border-2 border-white'>
              <th className='border-2 border-white py-2 px-4'>Task</th>
              <th className='border-2 border-white py-2 px-4'>Lead</th>
              <th className='border-2 border-white py-2 px-4'>Status</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {data.map((item, index) => (
              <tr key={index}>
                <td className='border-2 border-white py-2 px-4'>{item.Task}</td>
                <td className='border-2 border-white py-2 px-4'>{item.Teamleader}</td>
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

export default Manager;
