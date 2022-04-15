import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import img3 from '../assets/violetbg.png'

const Pricing = () => {
  return (
    <div className='w-full  bg-slate-50' > 
        <div  >
        <div className=''>
                    <h2 className='text-center font-bold text-black pb-3 text-4xl'>The Right Price for your Research.</h2>
                    <p className='text-gray-600 text-center py-3 mx-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Soluta assumenda amet quidem atque, praesentium nam dolor
                        . Corrupti nemo quos expedita ex hic dolores accusantium magnam
                        blanditiis. Nesciunt omnis nisi esse.</p>
            </div> 
            
            

        
            
        </div>
        <div className='-my-18'>
            <div className='mt-10 md:grid md:grid-cols-2 gap-x-10 gap-y-5 '>
                <Card></Card>
                <Card2></Card2>

            </div>
        </div>

    </div>
  )
}

export default Pricing