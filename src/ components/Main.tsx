import React from 'react'
import Navbar from './Navbar'
import {Menubar} from './Menubar'
import Home from './Home'

export const Main = () => {
  return (
    <div>
        <Navbar/>
        <Menubar/>
        <Home/>
    </div>
  )
}
