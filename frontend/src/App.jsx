import React from 'react'

import Home from './components/home/Home'
import Courses from './courses/courses'
import {Routes , Route} from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Login from './components/Login'
function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>

   </Routes>
    </>
  )
}

export default App
