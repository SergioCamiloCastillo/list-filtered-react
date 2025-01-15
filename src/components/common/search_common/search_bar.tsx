import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Importamos el ícono de la "X"
import "./search_bar.css";

interface SearchBarProps {
  handleSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    handleSearch(value);
  };

  const handleClear = () => {
    setTerm("");
    handleSearch(""); // Limpiar la búsqueda
  };

  return (
    <div className="search-bar-container">
      <p className="search-bar-label">Buscar usuarios:</p>
      <div className="input-container">
        <input
          id="search-input"
          type="text"
          placeholder="Escribe un nombre o correo..."
          className="search-bar-input"
          onChange={handleChange}
          value={term}
        />
        {term && (
          <FaTimes
            className="clear-icon"
            onClick={handleClear}
            role="button"
            aria-label="Limpiar búsqueda"
            //Se usa aria-label para asegurar la accesibilidad para personas con discapacidad visual
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;