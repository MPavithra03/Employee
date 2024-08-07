import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@material-tailwind/react";

const Reset = () => {
    const UserSchema = z.object({
        opassword:z.string().min(1,'Enter old password'),
        password:z.string().min(8,'Password must contain 8 characters long')
        .regex(/[A-Z]/,'Password must contain atleast one uppercase letter')
        .regex(/[a-z]/,'Password must contain atleast one lowercase letter')
        .regex(/[0-9]/,'Password must contain atleast one digit')
        .regex(/[!@#$%^&*(){}|<>]/, 'Password must contain atleast one special character'),
        cpassword:z.string().min(1,'Password is required!'),
    });
    const {register,handleSubmit,reset,formState:{errors}} = useForm({
        resolver:zodResolver(UserSchema),
      });
      const onSubmit=(data) =>{
        console.log('submitted');
        console.log(data);
      };
  return (
    <>
       <h1 className='text-white items-center font-bold text-center text-2xl'>Password Reset</h1>
       <form onSubmit={handleSubmit(onSubmit)} className='p-4 max-w-lg mx-auto items-center' >
       <div className='mb-4'>
        <label htmlFor="opassword" className='block text-sm font-medium text-white'>Old Password</label>
        <input id='opassword'
               type='password'
               placeholder='Enter your old password'
        {...register('opassword')}
        className={`bg-sky-800 focus:shadow-md focus:shadow-white text-white mt-1 block w-full px-3 py-2 border ${errors.name? 'border-red-500':'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
        {errors.opassword && <span className="text-red-500 text-sm">{errors.opassword.message}</span>}
      </div>

       <div className='mb-4'>
        <label htmlFor="password" className='block text-sm font-medium text-white'> New Password</label>
        <input id='password'
               type='password'
        {...register('password')}
        className={`bg-sky-800 focus:shadow-md focus:shadow-white text-white mt-1 block w-full px-3 py-2 border ${errors.name? 'border-red-500':'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>

      <div className='mb-4'>
        <label htmlFor="cpassword" className='block text-sm font-medium text-white'>Confirm Password</label>
        <input id='cpassword'
               type='password'
        {...register('cpassword')}
        className={`bg-sky-800 focus:shadow-md focus:shadow-white text-white mt-1 block w-full px-3 py-2 border ${errors.name? 'border-red-500':'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>

      <div className='text-center'>
      <Button ripple={true} type="submit" className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 duration-300 bg-sky-800 px-4 text-white py-2  font-medium rounded-md">Reset</Button>
      </div>
       </form>
    
       <div className='text-gray-500 text-center'>
      
      <p className='text-gray-500'>
      <Link to="/login">Goto login</Link></p>
    </div>
    <Outlet/>
    </>
  )
}

export default Reset
