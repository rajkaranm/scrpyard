import React from 'react'
import CreateProductForm from '../Components/CreateProductForm'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Topbar from '../Components/Topbar'

export default function AddProduct({user, setUser}) {
  return (
    <div>
        <Topbar />
        <Navbar user={user} setUser={setUser}  />
        <CreateProductForm user={user} />
        <Footer />
    </div>
  )
}
