import React from 'react'
import '../styles/MyCardsAccesorios.css'

export default function MyCardsAccesorios({ productosAc }) {
    return (
        <div className='body-accesorios'>
          <div id="header">
            <h1>Accesorios</h1>
          </div>
          <div className="containerAc"> 
            {productosAc.map((producto) => (
              <div className="cardAc" key={producto.id}>
                <div className="card-image">
                  <img src={producto.imagen} alt="Imagen-del-Accesorio"/>
                </div>
                <div className="card-textAc">
                  <p className="card-accesorio-typeAc">{producto.categoria}</p>
                  <h2 className="card-titleAc">{producto.titulo}</h2>
                  <p className="card-bodyAc">{producto.descripcion}</p>
                </div>
                <div className="card-Enlace">
                    <a href={producto.enlace} target="_blank" rel="noopener noreferrer">Más información</a>
                </div>
                <div className="card-priceAc">{producto.precio}</div>
              </div>
            ))}
          </div>
        </div>
    )
}
