import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import { About, Contact, Stacks } from '../components'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Stacks />
      <Contact />
    </>
  )
}

export default Homepage