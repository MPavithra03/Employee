import React from 'react'
import {Outlet,Link} from 'react-router-dom';
import home from '../../public/home.png';
import { Button } from "@material-tailwind/react";

const Home = () => {
  return (
    <>
    <h1 className='pt-5 pb-6 text-4xl text-center font-bold text-white drop-shadow-glow' >Welcome To Employee Management System</h1>
    <div className='px-3 py-5 text-white text-center '>
    
    <div className='flex flex-col md:flex-row items-center'>
      <div className=' px-auto h-1/2 md:w-1/2 py-auto  md:pb-5'>
        <img className='rounded-2xl w-11/12 mt-auto mb-auto mx-auto 'src={home} alt="Home" />
      </div>
      <div className='px-4 my-auto h-1/2 md:w-1/2 border-white rounded-2xl border-2' >
        <p className=' text-xl mb-3 px-3 py-4'>Welcome to our Employee Management System! This platform is designed to streamline and enhance the management of employee records, performance, and communication within our organization. Our user-friendly interface provides managers, team leaders, and employees with quick access to essential tools for tracking information, evaluating performance, and fostering team collaboration. This system simplifies your daily tasks and improves efficiency, supporting our commitment to creating a productive and supportive workplace. Thank you for being a part of our team and leveraging this system to achieve our collective goals.</p>
          <div className='pb-6'>
            <Button ripple={true}  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 duration-300 bg-sky-800 px-4 text-white py-2  font-medium rounded-md"><Link to="/login">Get Started</Link></Button>
          </div>
      </div>
     </div>
      <Outlet/>
    </div>
    </>
  )
}

export default Home;
