import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/addProduct" element={ <AddProduct /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
