import React from 'react'
import{
    CheckIcon
} from '@heroicons/react/outline';

const CheckItem = () => {
  return (
    <div>
        <div className='flex m-3'>
            <CheckIcon className='w-5 text-green-500 mr-3'></CheckIcon>
            <p>lorem pariatur hic nostrum cum error.</p>
        </div>
    </div>
  )
}

export default CheckItem