import React, { useState } from 'react';
import Cards from './MyCards'
import { ordenarProductos,  } from '../utils/ProductUtils.js';
import '../styles/Celulares.css'
import  productos  from '../assets/Productos.js' // Asegúrate de que la ruta sea correcta
import '../styles/MyCardsAccesorios.css'

export default function Celulares() {
  const [productosOrdenados, setProductosOrdenados] = useState(productos);
  
  
  // Función para manejar la ordenación
  const handleOrdenacion = (e) => {
    const nuevoCriterio = e.target.value;
    const productosOrdenadosActualizados = ordenarProductos(productos, nuevoCriterio);
    setProductosOrdenados(productosOrdenadosActualizados);
  };

  return (
    <div>
      <div id="header">
        <h1>Celulares</h1>
      </div>
      <div className="select-container">
        <select className="select-estilo" onChange={handleOrdenacion}>
          <option value="nombreCreciente">Nombre Ascendente</option>
          <option value="nombreDecreciente">Nombre Descendente</option>
          <option value="precioAlto">Precio Más Alto</option>
          <option value="precioBajo">Precio Más Bajo</option>
          <option value="masReciente">Más Reciente</option>
        </select>
        <Cards productos={productosOrdenados} />
      </div>
    </div>  
  );
}