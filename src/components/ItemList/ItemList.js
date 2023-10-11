import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ item }) => {

    console.log('products',item)

    return (
        <div className='row' id='itemlist'>
            {
                item.map(item =>

                    <div className='ListGroup' key={item.id}>
                        <Item item={item} />
                    </div>
                )
            }
        </div>
        
    )
}

export default ItemList