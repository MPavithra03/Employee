import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'

const  Addtm = () => {
      const UserSchema = z.object({
        name:z.string().min(1,'Name is required!'),
        email:z.string().email('invalid email address!'),
        mobile:z.string().min(10,'invalid mobile number'),
        dob: z.string().min(1,'Date of Birth is required!'),
        dept:z.string().min(1,'Dept is required!'), 
        gender: z.enum(['male', 'female'],'Gender is required'),
        role: z.enum(['manager', 'teamleader'],'Role is required'),
        address:z.string().min(1,'Address is required!'),
        password:z.string().min(8,'Password must contain 8 characters long')
        .regex(/[A-Z]/,'Password must contain atleast one uppercase letter')
        .regex(/[a-z]/,'Password must contain atleast one lowercase letter')
        .regex(/[0-9]/,'Password must contain atleast one digit')
        .regex(/[!@#$%^&*(){}|<>]/, 'Password must contain atleast one special character'),
        cpassword:z.string().min(1,'Password is required!'),
      }).refine((data)=>data.password===data.cpassword,{
        message:'Password did not match',
        path:['cpassword'],
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
    <h1 className='text-white items-center font-bold text-center text-2xl'> Registration</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='p-4 max-w-lg mx-auto items-center' >
      <div className='mb-4'>
        <label htmlFor="name" className='block text-sm font-medium text-white'>Name</label>
        <input 
        placeholder='Enter your name'
        id='name'
        {...register('name')}
        className={`bg-sky-800 mt-1 block focus:shadow-md focus:shadow-white text-white mt-1 block w-full px-3 py-2 border ${errors.name? 'border-red-500':'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="dob" className="block text-sm font-medium text-white">DOB</label>
        <input
          id="dob"
          type="date"
          {...register('dob')}
          className={`bg-sky-800 focus:shadow-md focus:shadow-white text-white mt-1 block w-full px-3 py-2 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
      </div>


      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <input
          placeholder='Eg.abcd@gmail.com'
          id="email"
          type="email"
          {...register('email')}
          className={`bg-sky-800 focus:shadow-md focus:shadow-white text-white mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="mobile" className="block text-sm font-medium text-white">Mobile</label>
        <input
          id="mobile"
          type="tele"
          {...register('mobile')}
          className={`bg-sky-800 text-white mt-1 block focus:shadow-md focus:shadow-white w-full px-3 py-2 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
      </div>

      <div className='mb-4'>
  <label htmlFor="dept" className='block text-sm font-medium text-white'>Department</label>
  <select 
    id='dept'
    {...register('dept')}
    className={`bg-sky-800 text-white mt-1 block focus:shadow-md focus:shadow-white w-full px-3 py-2 border ${errors.dept? 'border-red-500':'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
  >
    <option value="">Select your department</option>
    <option value="front-end">Front-end</option>
    <option value="back-end">Back-end</option>
    <option value="IoT">IoT</option>
  </select>
  {errors.dept && <span className="text-red-500 text-sm">{errors.dept.message}</span>}
</div>


      <div className=' text-white mb-4'>
        <label htmlFor='gender' className='block text-sm font-medium '>Gender</label>
       <div className='flex pt-1.5'>
       <div className='flex items-center'>
          <input type="radio"
                 value='male'
                 {...register('gender')}
                className="form-radio" />
                 <span>Male</span>
        </div>
        
        <div className='flex pl-3 items-center'>
          <input type="radio"
                 value='female'
                 {...register('gender')}
                className="form-radio" />
                 <span>Female</span>
        </div>

       </div>
       {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
      </div>

      <div className='mb-4 '>
        <label htmlFor="address" className='block text-sm font-medium text-white'>Address</label>
        <input id='address'
        placeholder='Enter your address'
        {...register('address')}
        className={`text-white mt-1 block focus:shadow-md focus:shadow-white bg-sky-800  w-full px-3 py-2 border ${errors.name? 'border-red-500':'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
        {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
      </div>

      <div className='mb-4'>
        <label htmlFor="password" className='block text-sm font-medium text-white'>Password</label>
        <input id='password'
               type='password'
        {...register('password')}
        className={`bg-sky-800 text-white mt-1 block focus:shadow-md focus:shadow-white w-full px-3 py-2 border ${errors.name? 'border-red-500':'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>

      <div className='mb-4'>
        <label htmlFor="cpassword" className='block text-sm font-medium text-white'>Confirm Password</label>
        <input id='cpassword'
               type='password'
        {...register('cpassword')}
        className={`bg-sky-800 text-white mt-1 block focus:shadow-md focus:shadow-white  w-full px-3 py-2 border ${errors.name? 'border-red-500':'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>

      <div className='text-center '>
      <Button ripple={true} type="submit"  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 duration-300 bg-sky-800 px-4 text-white py-2  font-medium rounded-md">Add</Button>  
      </div>
    
    </form>
    
    <Outlet/>
    </>
  )
}

export default Addtm ;



