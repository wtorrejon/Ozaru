import React, { useState } from 'react'
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({item}) => {

    const [goToCart, setGoToCart] = useState(false);

    const { addProduct } = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }


    return (
        <div className='WrapperDetail'>
        <picture className='WrapperItemImg'>
            <img src={item.img} alt={item.name} className='ItemImg' />
        </picture>
        <div className='Detail'>
            <div className='Header'>
                <h2 className='ItemHeader'>
                    {item.name}
                </h2>
            </div>
            <section className='sectionInfo'>
                <p className='info'>                                                                                                                                                    
                    <b>Descripcion:</b> {item.description}
                </p>
                <p className='info'>
                    <b>Categoria:</b> {item.category}
                </p>
                <p className='info'>
                    <b>Precio:</b> {item.price}
                </p>
                <p className='info'>
                    <b>Stock Disponible:</b> {item.stock} und
                </p>
                <div className='Wrapper-btnBuy'>
                {goToCart ? <Link className='btnBuy' to='/cart'>Terminar compra</Link> :<ItemCount stock={10} initial={0} onAdd={onAdd} />}
                </div>
            </section>
        </div>
    </div>
    )
}

export default ItemDetail