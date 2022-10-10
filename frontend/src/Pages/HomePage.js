import React from 'react'
import CategoryProduct from '../Components/CategoryProduct'
import FeaturesSection from '../Components/FeaturesSection'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import OfferProduct from '../Components/OfferProduct'
import Products from '../Components/Products'
import Topbar from '../Components/Topbar'


export default function HomePage() {
  return (
    <div>
     
        <Topbar />
        <Navbar />
        <FeaturesSection />
        <CategoryProduct />
        <OfferProduct />
        <Products />
        <Footer />
    </div>
  )
}
