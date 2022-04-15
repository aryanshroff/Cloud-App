import React from 'react'
import{
    CheckIcon
} from '@heroicons/react/outline';

const Notifications = () => {
  return (
    <div className='border-2 rounded-2xl shadow-lg shadow-indigo-100 hover:rounded-3xl hover:shadow-2xl hover:shadow-indigo-300 hover:-translate-y-1 mx-4 my-4'>
        <div className='flex justify-center mt-3'>
            <CheckIcon className='h-6 text-indigo-600 mr-3'></CheckIcon>
            <h2 className='font-bold lg:text-xl text-lg text-black '>Notifications</h2>
        </div>
        <div className='py-3 px-3'>
            <p className='text-gray-600 text-center  pb-4'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Officia eligendi eos illo quaerat ipsa atque ad ipsam
            , soluta nostrum voluptatibus reprehenderit quam assumenda, debitis amet
             sit iure voluptatem inventore obcaecati!</p>
        </div>
    </div>
  )
}

export default Notifications