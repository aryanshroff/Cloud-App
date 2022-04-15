import React from 'react'

const About = () => {
  return (
    <div className='my-32 w-full '>
        <div>
          <div className='flex justify-center'>
              <h2 className='text-2xl md:text-4xl lg:text-5xl  font-semibold md:font-bold text-centre'>Trusted by Developers across the World</h2>

          </div>
          <div className='py-3 mx-3 flex justify-centern'>
              <p className='p-7 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Dolorem accusantium optio, ea voluptatibus incidunt nobis eos voluptatum dicta, deserunt minus blanditiis ratione rerum 
                laborum laudantium molestias ex harum dolorum repellendus.</p>
          </div>
            

        </div>
        <div className='flex justify-center '>
            <div className='transition ease-in-out delay-150 container m-4 p-3 h-[90px] w-[120px] bg-zinc-100 border-2
               drop-shadow-lg rounded-lg flex flex-col justify-center 
               hover:shadow-2xl hover:scale-95 hover:-translate-y-1 hover:-translate-x-1
               hover:shadow-indigo-200 '>
              <p className='px-4 font-semibold text-indigo-600 text-3xl '>100%</p>
              <div className='flex justify-center'>
                 <p className='text-indigo-600'>Completion</p>
              </div>
              
              
              
            </div>
            <div className='transition ease-in-out delay-150 container m-4 p-3 h-[90px] w-[120px] bg-zinc-100 border-2
               drop-shadow-lg rounded-lg flex flex-col justify-center 
               hover:shadow-2xl hover:scale-95 hover:-translate-y-1 hover:-translate-x-1
               hover:shadow-indigo-200 '>
              <p className='px-4 font-semibold text-indigo-600 text-3xl '>24/7</p>
              <div className='flex justify-center'>
                 <p className='text-indigo-600'>Delivery</p>
              </div>
              
              
              
            </div>
            <div className='transition ease-in-out delay-150 container m-4 p-3 h-[90px] w-[120px] bg-zinc-100 border-2
               drop-shadow-lg rounded-lg flex flex-col justify-center 
               hover:shadow-2xl hover:scale-95 hover:-translate-y-1 hover:-translate-x-1
               hover:shadow-indigo-200 '>
              <p className='px-4 font-semibold text-indigo-600 text-3xl '>100K</p>
              <div className='flex justify-center'>
                 <p className='text-indigo-600'>Transactions</p>
              </div>
              
              
              
            </div>
            
        </div>
       
    </div>
  )
}

export default About