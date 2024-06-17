import React from 'react'
import { useState } from 'react';
import BarraBusqueda from './BarraBusqueda';
import Resultados from './Resultados';
import productos from '../assets/Productos.js';
import productosAc from '../assets/ProductosAc.js';
import ProductosTa from '../assets/ProductosTa.js';
function Busqueda() {
    const [searchTerm, setSearchTerm] = useState('');
    const data = (productos && productosAc && ProductosTa) ? [...productos, ...productosAc, ...ProductosTa] : [];
  
    const handleSearch = (term) => {
        console.log('Término de búsqueda recibido:', term); // Esto te ayudará a depurar
        setSearchTerm(term);
      };
    
      return (
        <div>
          <BarraBusqueda onSearch={handleSearch} />
          <Resultados searchTerm={searchTerm} data={data} />
        </div>
      );
    }
  
  export default Busqueda;