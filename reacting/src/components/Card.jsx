import React from 'react'

function Card() {
  const data =[
    {name: "Ali", image:"https://images.unsplash.com/photo-1717154462649-e0c67fa0f556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D", txt:"Hello this is my first text",inStock:true},
    {name: "Hassan", image:"https://images.unsplash.com/photo-1717154462649-e0c67fa0f556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D", txt:"Hey  seconf text", inStock:false},
    {name: "Muhammad", image:"https://images.unsplash.com/photo-1717154462649-e0c67fa0f556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3Do", txt:"Hello tjis is my third text", inStock:true},
    {name: "Naushad", image:"https://images.unsplash.com/photo-1717154462649-e0c67fa0f556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D", txt:"Hello tjis is my fourth text", inStock:false},
  ]
  return (
  <>
  <div className='w-full h-screen bg-red-200 flex justify-center items-center gap-10 '>
    {data.map((elem,index)=>(
 <div key={index} className=' w-52  rounded-md '>
 <div className='w-full h-32 bg-red-400 '>
    <img className='w-full h-full object-cover' src={elem.image} alt="" />
 </div>
 <div className='w-full px-3 py-4 '>
   <h1 className='font-semibold'>{elem.name}

   </h1>
   <p className='text-xs mt-3'>{elem.txt}</p>
   <button className={`px-4 py-1 ${elem.inStock?'bg-blue-600':'bg-red-600'} mt-3 text-xs rounded text-white`}>{elem.inStock?"In Stock":"Out of Stock"}</button>
 </div>
 </div>
    ))}
   
    

  </div>
  
  </>
  )
}

export default Card
