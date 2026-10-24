import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import '../Navbar/Navbar.css'

export const Layout = ({cardCount}) => {
  return (
    <Fragment>
        <Navbar cartCount={cardCount}/>
        <Outlet/>
        <section className='most-selling home-footer'>
          <Footer/>
      </section>
    </Fragment>
  )
}
