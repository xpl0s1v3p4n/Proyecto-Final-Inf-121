import '../styles/Resultados.css'
function Resultados({ searchTerm, data }) {

  const filteredData = data.filter(producto => producto.titulo.toLowerCase().includes(searchTerm.toLowerCase()));

  
  return (
    <div>
      {searchTerm && (
        <div className='resultados-container'>
          {filteredData.map(item => (
            <div key={item.id} className='resultado-item'>
              {item.titulo}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
  
export default Resultados;
  