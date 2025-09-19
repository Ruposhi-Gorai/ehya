import React from 'react'
import Header from './Header'
import '../assets/css/style.css'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Footer from './Footer'
import ContactForm from './ContactForm'

export default function HomePage() {
  return (
    <>

    <div className=''>
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <ContactForm/>
    <Footer/>

    </div>
    </>
  )
}
