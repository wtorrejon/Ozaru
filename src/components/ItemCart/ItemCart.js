import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './ItemCart.css'


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <div>
                <h1>Carrito de Compras</h1>
            </div>
            <div className='wrapper-tittlesProducts'>
                <ul className='tittlesProducts'>
                    <li>
                        Imagen
                    </li>
                    <li>
                        Descripcion
                    </li>
                    <li>
                        Cantidad
                    </li>
                    <li>
                        P/unitario
                    </li>
                    <li>
                        Subtotal
                    </li>
                    <li>
                        Eliminar
                    </li>
                </ul>
            </div>
            <div className='wrapper-productList'>
                <picture>
                    <img className='ImgProductList' src={product.img} alt={product.title} />
                </picture>
                <div className='nameProductList'>
                    <p>{product.name}</p>
                </div>
            </div>

            <div>
                <p>Título: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: $ {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ItemCart