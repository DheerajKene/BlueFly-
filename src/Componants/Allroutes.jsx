import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/Login'} element={<Login/>}/>
            <Route path={'/Register'} element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes