import { useState } from 'react'
import Allroutes from './Componants/Allroutes'
import Links from './pages/Links'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Allroutes/>
        <Links/> 
    </>
  )
}

export default App
