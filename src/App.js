import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/Home" element={<Header/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>

        <Route path="/products" element={<Products/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;
