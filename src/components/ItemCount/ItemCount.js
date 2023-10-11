import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd}) => {
    
    const [count, setCount] = useState (parseInt(initial));

    const resta = () => {
        setCount(count - 1);
    };

    const suma = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])
  
    return (
    <div className='counter-strike'>
        <div>
            <button className='btnControl' disabled={count>=1} onClick={resta}>
                -
            </button>
            <span>{count}</span>
            <button className='btnControl' disabled={count<=0} onClick={suma}>
                +
            </button>
            <div>
                <button className='AddCart' disabled={stock <= 0} onClick={() => onAdd(count)}>
                    Agregar al carrito
                </button>
            </div>

        </div> 

    </div>
  );
};

export default ItemCount;