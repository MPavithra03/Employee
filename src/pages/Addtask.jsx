import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import AddTaskIcon from '@mui/icons-material/AddTask';

const Addtask = () => {

  const [selectedOption, setSelectedOption]  = useState('');

 

    const UserSchema = z.object({
      task:z.string().min(1,'Task is required!'),
      overview:z.string().min(1,'Task overview is required'),
      start:z.string().min(1,'Assign starting date!'),
      end:z.string().min(1,'Assign end date!'),
      assign:z.enum(['teamleader','member'],'Select one')
});
const {register,handleSubmit,formState:{errors}} = useForm({
  resolver:zodResolver(UserSchema),
});
const onSubmit=(data) =>{
  console.log('submitted');
  console.log(data);
};

const handleChange = (e) => setSelectedOption(e.target.value)
  


    return (
      <>
      <div className='px-2 py-3 ml-auto top-0 mr-auto w-3/5 md:w-2/5 md-h-2/5 border-white rounded-2xl border-2 shadow-white shadow-md'>
      <h1 className='text-white text-center text-2xl font-bold'>Add New Task </h1>
        <form onSubmit={handleSubmit(onSubmit)} className='p-4 max-w-lg mx-auto items-center ' >
        
        <div className="mb-4">
          <label htmlFor="task" className="block text-sm font-medium text-white">Task : </label>
          
          <input
            placeholder='Enter task name'
            id="task"
            type="task"
            {...register('task')}
            className={`mt-1 block focus:shadow-md focus:shadow-white bg-sky-800 text-white w-full px-3 py-2 border ${errors.task ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.task && <span className="text-red-500 text-sm">{errors.task.message}</span>}
        </div>
        <div className='mb-4'>
          <label htmlFor="overview" className='block text-sm font-medium text-white'> Overview :</label>
          <input id='overview'
                 type='overview'
          {...register('overview')}
          className={`mt-1 focus:shadow-md focus:shadow-white bg-sky-800 text-white block w-full px-3 py-2 border ${errors.name? 'border-red-500 ':'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
          {errors.overview && <span className="text-red-500 text-sm">{errors.overview.message}</span>}
        </div>

        <div className=' justify-around block'>
        <div className="mb-4">
        <label htmlFor="start" className="block text-sm font-medium text-white">Starting Date :</label>
        <input
          id="start"
          type="date"
          {...register('start')}
          className={`bg-sky-800 focus:shadow-md focus:shadow-white text-white mt-1 block w-full px-3 py-2 border ${errors.start ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {errors.start && <span className="text-red-500 text-sm">{errors.start.message}</span>}
      </div>

      <div className="mb-4 ">
        <label htmlFor="end" className="block text-sm font-medium text-white">End Date :</label>
        <input
          id="end"
          type="date"
          {...register('end')}
          className={`bg-sky-800 focus:shadow-md focus:shadow-white text-white mt-1 block w-full px-3 py-2 border ${errors.end ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {errors.end && <span className="text-red-500 text-sm">{errors.end.message}</span>}
      </div>
        </div>

        <div className=' text-white mb-4'>
        <label htmlFor='assign' className='block text-sm font-medium '>Assigned To :</label>
       <div className='flex pt-1.5'>
        
      
          <input type="radio"
                id='TL'
                name='assign'
                 value={'teamleader'}
                 onChange={handleChange}
                 {...register('assign')}
                className="" />
                 <label htmlFor='TL'>TeamLeader</label>
       

 
          <input type="radio"
                id='member'
                name='assign'
                 value={'member'}
                 onChange={handleChange}
                 {...register('assign')}
                className="" />
                 <label htmlFor='member'>Member</label>
      
        </div>
       {errors.assign && <span className="text-red-500 text-sm">{errors.assign.message}</span>}

       
      </div>
      <label htmlFor="member"></label>
      <div className='text-center'>
        <Button ripple={true} type="submit" className="mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 duration-300 bg-sky-800 px-4 text-white py-2  font-medium rounded-md">Add</Button>
        </div>

        {selectedOption && (
        <div className='mt-4 text-white'>
          {selectedOption ==='teamleader' && (
            <>
          <label htmlFor="teamleader" className='block mb-2'>TEAMLEADER</label>
          <select name="" id="teamleader">
            <option value="abirami"> abirami</option>
            <option value="murali">murali</option>
          </select>
          </>
          )}

          {selectedOption ==='member' && (
            <>
          <label htmlFor="member-dropdown" className='block mb-2'>member</label>
          <select name="" id="member">
            <option value="abirami"> k7</option>
            <option value="murali">pavi</option>
          </select>
          </>
          )}
        </div>
       )}
       
        
        </form>
        </div>
      </>
        
      )
}

export default Addtask;
