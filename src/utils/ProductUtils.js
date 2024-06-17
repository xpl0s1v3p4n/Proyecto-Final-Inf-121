// productUtils.js

const extraerPrecio = (detalles) => {
  const detallePrecio = detalles.find(detalle => detalle.startsWith('Precio:'));
  if (detallePrecio) {
    return parseFloat(detallePrecio.split('Precio: ')[1].split(' Bs')[0]);
  }
  return 0;
};

// Función para ordenar productos según diferentes criterios
export const ordenarProductos = (productos, criterio) => {
  const productosOrdenados = [...productos];

  switch (criterio) {
    case 'nombreCreciente':
      productosOrdenados.sort((a, b) => a.titulo.localeCompare(b.titulo));
      break;
    case 'nombreDecreciente':
      productosOrdenados.sort((a, b) => b.titulo.localeCompare(a.titulo));
      break;
    case 'precioAlto':
      productosOrdenados.sort((a, b) => extraerPrecio(b.detalles) - extraerPrecio(a.detalles));
      break;
    case 'precioBajo':
      productosOrdenados.sort((a, b) => extraerPrecio(a.detalles) - extraerPrecio(b.detalles));
      break;
    // El caso 'masReciente' se ha eliminado porque no tienes una propiedad 'fecha' en tus datos
    default:
      // Si no se proporciona un criterio válido, devuelve la lista sin cambios
      return productos;
  }

  return productosOrdenados;
};

  
  // Función para filtrar productos según diferentes criterios
  export const filtrarProductos = (productos, filtros) => {
    let productosFiltrados = [...productos];
    if (filtros.marca) {
      productosFiltrados = productosFiltrados.filter(p => p.marca === filtros.marca);
    }
    // Agrega aquí los filtros para memoria interna, memoria RAM y gama de precios
    return productosFiltrados;
  };
  