import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className='totalPrice'>
        <div className='intoPrice'>
          <p><b>Total:</b> ${totalPrice()}</p>
        </div>
        <div className='botonera'>
          <Link className='wrapperSeguir' to="/">Seguir Comprando</Link>
          <Link className='wrapper-link' to="/checkout">
            {' '}
            <button className="btn-total">Finalizar Compra</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;