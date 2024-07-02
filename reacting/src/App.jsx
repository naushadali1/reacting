import { useState } from 'react'

import './App.css'
// import Card from './components/Card'


function App() {
  const [val, setVal] = useState({name:'Ali',isBanned:false});


  return (
    <>
  <div className='p-5'>
    <h1 className='font-semibold'>Name: {val.name}</h1>
    <h2 className='font-semibold'>is Banned: {val.isBanned.toString()}</h2>
    <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className='px-3  py-1 rounded text-xs bg-blue-500 text-white-900'>chsnger</button>
  </div>

    </>
  )
}

export default App
