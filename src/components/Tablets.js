import React from 'react'
import { useState } from 'react';
import Cards from './MyCardsTablets.js'
import { ordenarProductos,  } from '../utils/ProductUtils.js';
import '../styles/Celulares.css'
import ProductosTa  from '../assets/ProductosTa.js';
import '../styles/MyCardsAccesorios.css'

export default function Tablets() {
  const [productosOrdenados, setProductosOrdenados] = useState(ProductosTa);
  
  
  // Función para manejar la ordenación
  const handleOrdenacion = (e) => {
    const nuevoCriterio = e.target.value;
    const productosOrdenadosActualizados = ordenarProductos(ProductosTa, nuevoCriterio);
    setProductosOrdenados(productosOrdenadosActualizados);
  };

  return (
    <div>
      <div id="header">
        <h1>Tablets</h1>
      </div>
      <div className="select-container">
        {/* Botón desplegable para ordenar */}
        <select className="select-estilo" onChange={handleOrdenacion}>
        <option value="nombreCreciente">Nombre Ascendente</option>
        <option value="nombreDecreciente">Nombre Descendente</option>
        <option value="precioAlto">Precio Más Alto</option>
        <option value="precioBajo">Precio Más Bajo</option>
        <option value="masReciente">Más Reciente</option>
        </select>

        {/* Componente Cards con productos ordenados */}
        <Cards productos={productosOrdenados} />
      </div>
    </div>  
  );
}
