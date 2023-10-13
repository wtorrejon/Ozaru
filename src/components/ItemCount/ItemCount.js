import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    };

    const increase = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='counter-strike'>
            <div className='counter'>
                <div className='wrapper-btnControl'>
                    <button className='btnControlRest' disabled={count <= 0} onClick={decrease}>
                        -
                    </button>
                    <div className='spaceCount'>{count}</div>
                    <button className='btnControlAdd' disabled={count >= stock} onClick={increase}>
                        +
                    </button>
                </div>

                <div>
                    <button className='btnAddToCart' disabled={stock <= 0} onClick={() => onAdd(count)}>
                        Agregar al carrito
                    </button>
                </div>

            </div>

        </div>
    );
};

export default ItemCount;