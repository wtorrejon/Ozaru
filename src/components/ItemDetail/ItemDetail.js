import React, { useState } from 'react'
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

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
            <section>
                <p className='info'>                                                                                                                                                    
                    Descripcion: {item.description}
                </p>
                <p className='info'>
                    Categoria: {item.category}
                </p>
                <p className='info'>
                    Precio: {item.price}
                </p>
                <p className='info'>
                    Stock Disponible: {item.stock} und
                </p>
                <div className='Botones'>
                {goToCart ? <Link to='/cart'>Terminar compra</Link> :<ItemCount stock={item.stock} initial={0} onAdd={onAdd} />}
                </div>
            </section>
        </div>
    </div>
    )
}

export default ItemDetail