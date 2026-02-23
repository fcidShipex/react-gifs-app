import { useState } from "react"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { GifList } from "./gifs/components/GifList"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"


export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(`Term clicked: ${term}`);
  };

  const handleSearch = async (query: string = '') => {
    query = query.trim();
    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
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
    <GifList gifs={gifs} />
    </>
  )
}