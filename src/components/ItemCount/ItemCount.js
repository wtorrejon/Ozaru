import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

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
            <div>
                <button className='btnControl' disabled={count <= 1} onClick={decrease}>
                    -
                </button>
                <span>{count}</span>
                <button className='btnControl' disabled={count >= stock} onClick={increase}>
                    +
                </button>
                <div>
                    <button  disabled={stock <= 0} onClick={() => onAdd(count)}>
                        Agregar al carrito
                    </button>
                </div>

            </div>

        </div>
    );
};

export default ItemCount;