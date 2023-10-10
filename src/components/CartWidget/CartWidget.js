import React from 'react'
import {useCartContext} from '../../Context/CartContext';
import Carrito from '../assets/Icons/Carrito/Carrito';


const CartWidget = () => {
    const {totalProducts, cart} = useCartContext();
    return (
        <div>
            <button type="button" className="btn colorCartButton position-relative">
            <Carrito/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts() ||cart}</span>
            </button>
        </div>

    )
}

export default CartWidget