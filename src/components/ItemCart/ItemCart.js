import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './ItemCart.css'


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <div className='wrapper-productList'>
                <picture>
                    <img className='ImgProductList' src={product.img} alt={product.title} />
                </picture>
                <div className='nameProductList'>
                    <p>{product.name}</p>
                </div>
                <div className='quantityProductList'>
                    <p>{product.quantity}</p>
                </div>
                <div className='priceProductList'>
                    <p>${product.price}</p>
                </div>
                <div className='multProductList'>
                    <p>${product.quantity * product.price}</p>
                </div>
                <button className='btnRemove' onClick={() => removeProduct(product.id)}>
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ItemCart