import { useState, useEffect } from "react";

interface Props {
  placeholder: string;
  onQuery?: (query: string) => void;
}

export const SearchBar = ({placeholder = "Buscar...", onQuery}: Props) => {

  const [query, setQuery] = useState("");
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (onQuery) {
        onQuery(query);
      }
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    }

  }, [query, onQuery]);

  const handleSearch = () => {
    if (onQuery) {
      onQuery(query);
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder={placeholder} 
        className="search-input" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className="search-button">Buscar</button>
    </div>
  )
}