import React,{useState} from 'react';

import {MenuIcon,XIcon} from '@heroicons/react/outline'
const Navbar = () => {
    const [nav,setNav]=useState(true);
    const handleClick=()=>{
        setNav(!nav)
    };
    

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg '>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='hidden md:flex  pr-4'>
                    <button className='bg-transparent text-black font-semibold '>Sign In</button>
                    <button>Sign Up</button>
                
                </div>
                <div className='md:hidden ' onClick={handleClick}>
                    
                    
                    
                    {nav ? <MenuIcon className='w-5 '></MenuIcon>:<XIcon className='w-5'></XIcon>}
                    
                </div>
                
            </div >
            <ul className={nav ? 'hidden' :'absolute bg-zinc-200 w-full px-8' }>
            
                <li className='border-b-2 border-zinc-300'>Home</li>
                <li className='border-b-2 border-zinc-300'>About</li>
                <li className='border-b-2 border-zinc-300'>Support</li>
                <li className='border-b-2 border-zinc-300'>Platforms</li>
                <li className='border-b-2 border-zinc-300'>Pricing</li>
                <div className='flex flex-col my-3'>
                <button className='bg-transparent text-indigo-600 border px-8 py-3 mb-4'>Sign In</button>
                <button classname='px-8 py-3'>Sign Up</button>
            </div>
            </ul>
            
            
        </div>
    )
}

export default Navbar