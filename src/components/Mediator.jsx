import React from 'react'
import Displaybox from './Displaybox'

const Mediator = (array) => {
  return (
    <div>
        <Displaybox></Displaybox>
        {array.map((object)=>{
            return(
                <Displaybox val1={object.val1} val2={object.val2}></Displaybox>
            )
        })}
    </div>
   
  )
}

export default Mediator