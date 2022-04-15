import React from 'react';

import img2 from '../assets/img3.jpg';
import{
    PhoneIcon , ArrowSmRightIcon
} from '@heroicons/react/outline';
import{
    ChipIcon,SupportIcon
} from '@heroicons/react/solid'

const Support = () => {
  return (
    <div className='w-full  mt-24'>
        <div className='w-full h-full bg-gray-800/90 absolute rounded-2xl'>
            <img className='w-full h-full object-cover mix-blend-overlay rounded-2xl' src={img2} alt="/" />
        </div>
        <div className='mx-auto text-white relative '>
            <div >
                <h2 className='text-center py-3  text-3xl'>
                    SUPPORT
                </h2>
                <h3 className='text-center hover:font-rubik font-extrabold hover:touch-pinch-zoom hover:font-thin text-4xl py-3'>
                    Find Your  Gang !
                </h3>
                <p className='p-7 text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Itaque praesentium fugit quis placeat nesciunt temporibus 
                    molestias animi fuga in ab nam ea saepe aperiam eius quo ut 
                    explicabo, nemo veniam!
                </p>
                <div className='mt-24 lg:mt-52'>
                <p className='p-7 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequatur laborum, necessitatibus temporibus distinctio 
                     recusandae, praesentium odit, libero reprehenderit quidem 
                     culpa sit ut excepturi mollitia voluptatum? Ducimus reprehenderit 
                     est neque quis.</p>
                </div>
                
                
                
            </div>
            <div className='grid  grid-cols-1 lg:grid-cols-3 relative gap-x-9 
            gap-y-16 px-4 pt-12  sm:pt-20  text-black mt-24 items-start'>
                <div className='bg-white rounded-2xl shadow-2xl mt-[-4em] '>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-2xl mt-[-4em]'></PhoneIcon>
                        <h3 className='font-bold text-2xl my-3'>Sales</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Dolor libero similique fuga doloribus commodi sequi,
                              aut voluptate quasi amet eius modi nam ex doloremque 
                              natus optio ipsum atque, cupiditate quae.
                        </p>
                    </div>
                    <div className='flex  h-14 bg-slate-100 hover:bg-slate-200'>
                        <p className='text-indigo-600 font-bold ml-8 my-4'>Contact Us </p>
                        <ArrowSmRightIcon className='w-5 ml-2  text-indigo-600'></ArrowSmRightIcon>
                    </div>
                </div>
                
                
                    
                
                
                <div className='bg-white rounded-2xl shadow-2xl lg:mt-[-4em]'>
                    <div className='p-8'>
                        <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-2xl mt-[-4em]'></ChipIcon>
                        <h3 className='font-bold text-2xl my-3'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Dolor libero similique fuga doloribus commodi sequi,
                              aut voluptate quasi amet eius modi nam ex doloremque 
                              natus optio ipsum atque, cupiditate quae.
                        </p>
                    </div>
                    <div className='flex  h-14 bg-slate-100 hover:bg-slate-200'>
                        <p className='text-indigo-600 font-bold ml-8 my-4'>Contact Us </p>
                        <ArrowSmRightIcon className='w-5 ml-2  text-indigo-600'></ArrowSmRightIcon>
                    </div>
                </div>
                <div className='bg-white rounded-2xl shadow-2xl lg:mt-[-4em] '>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-2xl mt-[-4em]'></SupportIcon>
                        <h3 className='font-bold text-2xl my-3'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Dolor libero similique fuga doloribus commodi sequi,
                              aut voluptate quasi amet eius modi nam ex doloremque 
                              natus optio ipsum atque, cupiditate quae.
                        </p>
                    </div>
                    <div className='flex  h-14 bg-slate-100 hover:bg-slate-200 '>
                        <p className='text-indigo-600 font-bold ml-8 my-4'>Contact Us </p>
                        <ArrowSmRightIcon className='w-5 ml-2  text-indigo-600'></ArrowSmRightIcon>
                    </div>
                </div>
                
                
                
                
                
            </div>
        </div>
    </div>
  )
}

export default Support