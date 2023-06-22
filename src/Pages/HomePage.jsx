import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import { baseUrl } from '../components/baseUrl'

function HomePage() {
  return (
    <div>
    <Header/>
      <Blogs baseUrl={baseUrl}/>
      <Footer/>
    </div>
  )
}

export default HomePage