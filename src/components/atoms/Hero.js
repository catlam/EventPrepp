import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-6 p-4 m-2'>
     <div className='text-gray-100'>
        <h1 className='text-4xl font-medium'>Lorem ipsum dolar ruppes</h1>
        <p className='text-base'>something something something</p>
     </div>
     <div className='flex bg-purple-800 w-96 h-96 rounded-xl items-end'>
     <img src="https://avatars.githubusercontent.com/u/84636204?v=4" className='rounded-xl w-80- h-80 m-2'/>
     </div>
    </div>
  )
}

export default Hero