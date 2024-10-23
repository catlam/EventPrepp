import React from 'react'

const CustomButton = (props) => {
  return (
    <div
    className='p-4 w-[10%] text-center text-white rounded-lg m-2 bg-black'>{props.title}</div>
  )
}

export default CustomButton