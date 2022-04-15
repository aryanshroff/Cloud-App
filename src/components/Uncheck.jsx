import React from 'react'
import {XIcon} from '@heroicons/react/outline'


const Uncheck = () => {
  return (
    <div>
        <div className='flex m-3'>
            <XIcon className='w-5 text-red-700 mr-3'></XIcon>
            <p className='line-through decoration-red-600'>lorem pariatur hic nostrum cum error.</p>
        </div>
    </div>
  )
}

export default Uncheck;