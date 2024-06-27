import React from 'react'

function Card() {
  return (
  <>
  <div className='w-full h-screen bg-red-200 '>
    <div className=' w-52  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-red-100 rounded-md '>
    <div className='w-full h-32 bg-red-400 '>
       <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1717154462649-e0c67fa0f556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <div className='w-full px-3 py-4 '>
      <h1 className='font-semibold'>Amazom</h1>
      <p className='text-xs mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, nemo totam? Reiciendis corporis perferendis ullam doloribus vero, vitae nam dolor modi illo tenetur ea delectus debitis quas sapiente ex ab.</p>
    </div>
    </div>
    

  </div>
  
  </>
  )
}

export default Card
