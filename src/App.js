import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel';

function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Carrousel />

      </CartProvider>
    </BrowserRouter>

  );
}

export default App;
