import React from 'react'
import CreateProductForm from '../Components/CreateProductForm'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Topbar from '../Components/Topbar'

export default function AddProduct() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <CreateProductForm />
        <Footer />
    </div>
  )
}
