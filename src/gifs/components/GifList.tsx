import type { Gif } from "../../mock-data/gifs.mock";
import type { FC } from "react";

interface Props {
    gifs: Gif[];
}

export const GifList: FC<Props> = ({ gifs }) => {
    return (
    <div className="gifs-container">
      {
        gifs.map(gif => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} className="gif-image" /> 
            <h3 className="gif-title">{gif.title}</h3>
            <p>
              {gif.width} x {gif.height} (1.5MB)
            </p>
          </div>
        ))
      }
    </div>
    )
}