import React, { useState, useEffect } from 'react';

const TestimonialItem = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        const nextCount = prevCount + 1;
        if (nextCount > props.count) {
          clearInterval(timer);
          return props.count;
        }
        return nextCount;
      });
    }, 10);
    return () => clearInterval(timer);
  }, [props.count]); 

  return (
    <div className='flex flex-col text-gray-100 p-4 m-4'>
      <h1 className='text-2xl font-medium'>{props.title}</h1>
      <p className='text-4xl font-medium'>{count}+</p>
    </div>
  );
};

export default TestimonialItem;
