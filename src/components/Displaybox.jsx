import React from 'react'

const Displaybox = (props) => {
    const val1=props.val1
    const val2=props.val2
  return (
    <div className='container m-4 p-4 h-[90px] w-[100px] bg-zinc-100 border-2 drop-shadow-lg rounded-lg'>
        <h1 className='text-indigo-600 font-bold text-2xl'>{val1}</h1>
        <h2>{val2}</h2>


    </div>
  )
}

export default Displaybox