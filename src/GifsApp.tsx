import { useState } from "react"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { GifList } from "./gifs/components/GifList"



export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log(`Term clicked: ${term}`);
  };

  const handleSearch = (query: string = '') => {
    query = query.trim();
    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 8));
    }

  return (
    <>

    {/* Header with title and description */}
    <CustomHeader 
      title="buscador de Gifs App"
      description="Busca y descubre los mejores gifs de la web"
    />

    {/* Search input and button */}
    <SearchBar  
      placeholder="Busca lo que necesites..."
      onQuery={(handleSearch)}
    />

    {/* Busquedas previas */}
    <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

    {/* Grid de gifs */}
    <GifList gifs={mockGifs} />
    </>
  )
}