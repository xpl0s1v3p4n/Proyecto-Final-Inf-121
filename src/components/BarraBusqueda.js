import { useState } from 'react';
import '../styles/BarraBusqueda.css'
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange  = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input className="barra-busqueda"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBar;
