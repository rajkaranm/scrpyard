import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from './Pages/AddProduct';
import Login from './Pages/Login';
import Register from './Pages/Register';
import axios from 'axios';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import Chat from './Components/ChatBot';


function App() {
  const [user, setUser] = useState("");


  useEffect(() => {
    if (localStorage.getItem("_id")) {
      async function fetchData() {
        const req = await axios.get(`http://localhost:5000/product/get/${localStorage.getItem("_id")}`);

        setUser(req.data);
      }
      fetchData();

    }

  }, [])

  return (
    <div classNameName="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage user={user} setUser={setUser} />}></Route>
          <Route path="/addProduct" element={<AddProduct user={user} />}></Route>
          <Route path="/login" element={<Login setUser={setUser} />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/product/id/:id" element={<ProductPage user={user} setUser={setUser} />} />
          <Route path="/cart" element={<Cart user={user} setUser={setUser}/>} />
          <Route path="/search" element={<Search />} />
          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
