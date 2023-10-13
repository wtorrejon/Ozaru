import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ item }) => {

    console.log('products',item)

    return (
        <div className='groupCards' id='itemlist'>
            {
                item.map(item =>

                    <div className='cardWrapper' key={item.id}>
                        <Item item={item} />
                    </div>
                )
            }
        </div>
        
    )
}

export default ItemList