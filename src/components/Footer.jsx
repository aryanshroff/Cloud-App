import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faFaceAngry} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGithub, faTwitch, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
  return (
    <div className='w-full mt-12 bg-slate-900 text-gray-300 px-2'>
        <div className='lg:flex p-9 pb-0 '> 
            <div className='grid grid-cols-2 lg:grid-cols-4 font-thin '>
                <div className='mx-auto mb-3'> 
                    <h2 className='font-semibold border-none rounded-md shadow-lg  shadow-black text-center px-4'>SOLUTIONS</h2>
                    <ul className='-space-y-5'>
                        <li>Marketing</li>
                        <li>Analysis</li>
                        <li>Commerce</li>
                        <li>Cloud</li>
                    </ul>

                </div>
                <div className='mx-auto mb-3'>
                    <h2 className='font-semibold border-none  rounded-md shadow-lg  shadow-black text-center px-4 '>SUPPORT</h2>
                    <ul className='-space-y-5'>
                        <li>Pricing</li>
                        <li>Documentation</li>
                        <li>Guides</li>
                        <li>API Status</li>
                    </ul>
                </div>
                <div className='mx-auto mb-3'>
                    <h2 className='font-semibold border-none rounded-md shadow-lg  shadow-black text-center mt-5 lg:mt-0 px-4'>COMPANY</h2>
                    <ul className='-space-y-5'>
                        <li>Anout</li>
                        <li>Blogs</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div className='mx-auto mb-3'>
                    <h2 className='font-semibold border-none rounded-md shadow-lg  shadow-black text-center px-4 mt-5 lg:mt-0'>LEGAL</h2>
                    <ul className='-space-y-5 '>
                        <li >Chain</li>
                        <li>Private</li>
                        <li>Policies</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col lg:mx-auto'>
                <div className='flex justify-center'>
                     <h2 className='text-xl font-medium animate-bounce'>Subscribe to our Newsletter !</h2>
                </div>
                <p className='my-2 text-center'>The latest news , articles and resources , sent to your inbox weekly.</p>
                <div className='flex justify-center'>
                    
                    <input type="text" placeholder='Enter your email' className='placeholder:text-slate-600 placeholder:text-sm placeholder:text-center placeholder:align-middle rounded-md m-2 h-9 w-2/4' />
                    <button className='h-9 mt-2'>Subscribe</button>
                </div>

                
               
            </div>

        </div>
        <div className='p-6'>
            <div className='border-t '>
                <div className='flex justify-start'>
                    <p className='text-sm font-thin'>2022 Shelby,LLC.All rights reserved</p>
                </div>
                
                <div className='mt-3'>
                    <FontAwesomeIcon icon={faYoutube} className='pl-3'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faFacebook} className='pl-3'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} className='pl-3'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitch} className='pl-3'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faGithub} className='px-3'></FontAwesomeIcon>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer