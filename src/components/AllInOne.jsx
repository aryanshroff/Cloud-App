import React from 'react'
import Notifications from './Notifications'

const AllInOne = () => {
    function notif(value){
        let n=value;
        for(let i=0;i<n;i++){
            <Notifications></Notifications>
        }
    }
  return (
    <div className='w-full  my-16'>
        <div className='max-w-[1240px] mx-auto px-2' >
            <h2 className='text-center font-extrabold text-5xl'>All-In-One Platform</h2>
            <div className='my-4'>
                <p className='p-7 text-center text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Accusantium laboriosam ut magnam vitae obcaecati delectus animi
                      provident exercitationem, nobis totam tempore at, eum facere
                       nemo labore quod dolore, modi sunt.</p>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-9 pt-4 '>
            
            <Notifications></Notifications>
            <Notifications></Notifications>
            <Notifications></Notifications>
            <Notifications></Notifications>
            <Notifications></Notifications>
            <Notifications></Notifications>
            <Notifications></Notifications>
            <Notifications></Notifications>
            

        </div>
    </div>
  )
}

export default AllInOne