import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel';
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "../src/components/Checkout/Checkout";
import Cart from "../src/components/Cart/Cart";
import Error404 from "../src/components/Error404/Error404"


function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Carrousel />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>

      </CartProvider>
    </BrowserRouter>

  );
}

export default App;
