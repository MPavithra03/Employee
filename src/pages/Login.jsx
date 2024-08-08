import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';


const Login = () => {
  const UserSchema = z.object({
    email:z.string().email('invalid email address!'),
    password:z.string().min(1,'Password is required!')
    
  });
  const navigate = useNavigate();

  const {register,handleSubmit,reset,formState:{errors}} = useForm({
    resolver:zodResolver(UserSchema),
  });
  const onSubmit=(data) =>{
    console.log(data)
  };
  return (
   <>
   <h1 className='text-white text-center text-3xl font-bold mx-auto my-auto drop-shadow-glow'>Employee Management System</h1>
    <div className='flex flex-col md:flex-row  items-center'>
      <div className='w-1/2 '>
        <img src="../../public/two.png" className='mx-auto w-4/5 h-4/5' alt="" /> 
      </div >
      
      <div className='px-2 py-3 ml-auto top-0 mr-auto w-3/5 md:w-2/5 md-h-2/5 border-white rounded-2xl border-2 shadow-white shadow-md'>
      <h1 className='text-white text-center text-2xl font-bold'>Login </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='p-4 max-w-lg mx-auto items-center ' >
        
      <div className="mb-4 ">
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <div className="relative mt-1">
        <div className="absolute my-auto mt-2 left-0 flex items-center pl-3 pointer-events-none">
        <EmailIcon className="text-white" />
        </div>
        <input
          placeholder='Eg.abcd@gmail.com'
          id="email"
          type="email"
          {...register('email')}
          className={`mt-1 block pl-10 focus:shadow-md focus:shadow-white bg-sky-800 text-white w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        
        />
        
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      </div>
      <div className='mb-4'>
        <label htmlFor="password" className='block text-sm font-medium text-white'> Password</label>
        <div className="relative mt-1">
        <div className="absolute my-auto mt-2 left-0 flex items-center pl-3 pointer-events-none">
        <KeyIcon className="text-white " />
        </div>
        <input id='password'
               type='password'
        {...register('password')}
        className={`mt-1 pl-10 focus:shadow-md focus:shadow-white bg-sky-800 text-white block w-full px-3 py-2 border ${errors.name? 'border-red-500 ':'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        <p className='text-white text-right'>Forgot password?</p>
      </div>
      </div>
      <div className='text-center'>
      <Button ripple={true} type="submit" className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 duration-300 bg-sky-800 px-4 text-white py-2  font-medium rounded-md">Login</Button>
      </div>
      </form>
      <div className=' text-center '>
        <p className='text-white'>Not registered?</p>
        <p className=' text-violet-400'><Link to='/registration'>Go to Registration</Link></p>

      </div>
      
      </div>
      
      </div>
      

      <div className="mt-4">
            <button 
              onClick={() => navigate(-1)} 
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
            >
              Back
            </button>
          </div>
        
      <div className='flex'>
      <div>
      <button className='text-white px-4 py-3 text-md  '>
      <Link to="/manager">Manager page</Link></button>
    </div>
    
      <div>
      <button  className='text-white px-4 py-3 text-md '>
      <Link to="/tl">TL page</Link></button>
    </div>
    <div>
      <button  className='text-white px-4 py-3 text-md '>
      <Link to="/member">Member</Link></button>
    </div>
    <div>
      <button  className='text-white px-4 py-3 text-md '>
      <Link to="/reset">Reset</Link></button>
    </div>
      </div>
    <Outlet/>
    </>
  )
}
export default Login;





