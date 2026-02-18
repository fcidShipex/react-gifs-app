import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { GifList } from "./gifs/components/GifList"
export const GifsApp = () => {
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
    />

    {/* Busquedas previas */}
    <PreviousSearches />

    {/* Grid de gifs */}
    <GifList gifs={mockGifs} />
    </>
  )
}