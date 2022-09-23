import React from 'react'
import FeaturesSection from '../Components/FeaturesSection'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Topbar from '../Components/Topbar'

export default function HomePage() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <FeaturesSection />
        <Products />
        <Footer />
    </div>
  )
}
