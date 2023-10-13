import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Item.css'

const Item = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Precio: {item.price}
        </Card.Text>
        <Card.Text>
          Stock Disponible: {item.stock}
        </Card.Text>
        <Button variant="primary"><Link to={"/item/" + item.id} className='Option' >Ver Detalle</Link></Button>
      </Card.Body>
    </Card>
  )
}

export default Item;