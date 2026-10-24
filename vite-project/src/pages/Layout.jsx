import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { useState } from "react"



export const Layout = () => {
  
  return (
    <div>
       
        <Navbar />
        <Outlet />
        <section className='most-selling home-footer'>
        <Footer/>
      </section>
    </div>
  )
}
