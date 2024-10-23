import React from 'react'
import TestimonialItem from '../atoms/TestimonialItem'

const Testimonial = () => {
  return (
    <div className='m-2 p-4 flex flex-row items-center justify-center gap-8'>
        <TestimonialItem title={'Sessions'} count={350}/>
        <TestimonialItem title={'Speakers'} count={50}/>
        <TestimonialItem title={'Members'} count={700}/>
    </div>
  )
}

export default Testimonial