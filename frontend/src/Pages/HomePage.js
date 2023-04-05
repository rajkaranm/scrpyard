import React from "react";
import CategoryProduct from "../Components/CategoryProduct";
import FeaturesSection from "../Components/FeaturesSection";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import OfferProduct from "../Components/OfferProduct";
import Products from "../Components/Products";
import Topbar from "../Components/Topbar";
import ChatBot from "../Components/ChatBot";

export default function HomePage({ user, setUser }) {
  return (
    <div>
      <Topbar />
      <Navbar user={user} setUser={setUser} />
      <FeaturesSection />
      <CategoryProduct />
      <OfferProduct />
      <Products />
      <ChatBot />
      <Footer />
    </div>
  );
}
