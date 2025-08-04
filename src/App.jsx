import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import ScrollProgress from './UI/ScrollProgress' // adjust path if needed

const App = () => {
  return (
    <div>
      <Navbar />
      <div className=" sm:hidden relative"></div>
      <ScrollProgress />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
