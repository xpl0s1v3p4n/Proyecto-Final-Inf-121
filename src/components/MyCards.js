import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/MyCards.css'

export default function MyCards({ productos }) {
  return (
    <div className="cards-container">
      {productos.map((producto) =>(
        <Card key={producto.id} style={{ width: '19rem', height: '51rem', margin:'10px'}}> {/* Asegúrate de usar 'key' aquí */}
          <Card.Img variant="top" src={producto.imagen} /> {/* Usa 'producto.imagen' para la imagen */}
          <Card.Body>
              <Card.Title>{producto.titulo}</Card.Title>
              <Card.Text>
                  {producto.descripcion}
              </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {producto.detalles.map((detalle, index) => (
              <ListGroup.Item key={index}>{detalle}</ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body>
            <Card.Link className="LinkInfo" href={producto.enlace} target="_blank" rel="noopener noreferrer">Más información</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
