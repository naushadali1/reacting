import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card from './components/Card'
import Songs from './components/Songs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Songs/>
    </>
  )
}

export default App
