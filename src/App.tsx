import React from 'react'
import { Main } from './ components/Main'
import Login from './ components/Login'
import Signup from './ components/Signup'
import { Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Main/>}/>
    </Routes>
    </>
  )
}

export default App