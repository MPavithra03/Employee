import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

const Manager = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle(current => !current);
  }

  const data = [
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' },
    { Task: 'sample1', Teamleader: 'Smith', Status: 'Ongoing',End:'10/05/2024' }
  ];

  return (
    <>
      <h1 className='text-white text-center text-2xl rounded-3xl font-bold drop-shadow-glow'>Task Management Dashboard</h1>
      <div className='pb-3 pt-3 w-2/3 mr-auto ml-auto  h-16 flex flex-row-reverse'>
        <Button ripple={true} onClick={handleClick} className=" bg-sky-800 px-4 text-white py-2 font-medium rounded-md">+Add</Button>
        {isToggle && (
           <div className='flex my-auto  border-rounded-2xl border-white justify-end text-white'>
              <div>
                <button className='lg:w-28 lg:-10  rounded-lg bg-sky-600 px-4-py-2 hover:bg-sky-500'>
                  <Link to="/addtl">Team Leader</Link>
                </button>
              </div>
              <div>
                <button className='lg:w-28 lg:-10  rounded-lg bg-sky-600 px-4-py-2 hover:bg-sky-500'>
                  <Link to="/addtask">Add Task</Link>
                </button>
              </div>
              <div>
                <button className='lg:w-28 lg:-10  rounded-lg bg-sky-600 px-4-py-2 hover:bg-sky-500'>
                  <Link to="/addtm">Team Member</Link>
                </button>
              </div>
            </div>
        )}
      </div>

      <div className='  text-white max-h-96 w-2/3 overflow-y-scroll scrollbar-hide border-4 border-white border-rounded-2xl mx-auto'>
        <table className='border-2 w-full  border-rounded-lg border-white ml-auto mr-auto'>
          <thead className='text-center text-black sticky top-0 border-2 border-rounded-lg border-white bg-white'>
            <tr className='border-2 border-white'>
              <th className='border-2 border-white py-2 px-4'>Task</th>
              <th className='border-2 border-white py-2 px-4'>Lead</th>
              <th className='border-2 border-white py-2 px-4'>Status</th>
              <th className='border-2 border-white py-2 px-4'>End Date</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {data.map((item, index) => (
              <tr key={index}>
                <td className='border-2 border-white py-2 px-4'>{item.Task}</td>
                <td className='border-2 border-white py-2 px-4'>{item.Teamleader}</td>
                <td className='border-2 border-white py-2 px-4'>{item.Status}</td>
                <td className='border-2 border-white py-2 px-4'>{item.End}</td>
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
