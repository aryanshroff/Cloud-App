import React from 'react'
import CheckItem from './CheckItem';
import Uncheck from './Uncheck';
import {XIcon} from '@heroicons/react/outline'


const Card = () => {
    let variation="STANDARD";
    let price=49;
  return (
    <div className='border-2 rounded-2xl shadow-lg w-96  mt-6  hover:rounded-3xl hover:shadow-2xl  hover:-translate-y-1 mx-auto'>
        <div className='m-4 relative flex flex-col'>
            <div className='flex justify-center border-1 bg-indigo-400 rounded-lg w-40 mt-4'>
                <h2 >{variation}</h2>

            </div>
            <div className='m-3'>
                <h3 className='text-4xl font-bold '>${price}<sub>/mo</sub></h3>
            </div>
            <div className='m-3'>
                <p className='py-3 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Autem culpa quasi pariatur hic nostrum cum error, quaerat est!
                     Praesentium, a quis cum reiciendis hic voluptates. Ab corrupti 
                     sed iure repudiandae?
                </p>
                <CheckItem></CheckItem>
                <CheckItem></CheckItem>
                <CheckItem></CheckItem>
                <CheckItem></CheckItem>
                <CheckItem></CheckItem>
                <Uncheck></Uncheck>
                <Uncheck></Uncheck>
                <Uncheck></Uncheck>
                <Uncheck></Uncheck>
                <Uncheck></Uncheck>

            </div>
            <button className='mb-4 hover:bg-black  hover:text-white'>Get Started</button>
        </div>
        

    </div>
  )
}

export default Card