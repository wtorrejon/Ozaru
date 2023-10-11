import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel';
import ItemListContainer from "../src/componets/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/componets/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componets/Cart/Cart";
import Error404 from "../src/components/Error404/Error404"
import Checkout from "../src/components/Checkout/Checkout"

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
