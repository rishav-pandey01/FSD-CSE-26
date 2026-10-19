import React from 'react'
import Header from '../component/header'
import Navbar from '../component/navbar'
import Home from '../component/home'
import Footer from '../component/Footer'

const UserLayout = () => {
  return (
    <div className="user-layout">
        <Header/>
        <Navbar/>
        <Home/>
        <Footer/>
      
    </div>
  )
}

export default UserLayout
