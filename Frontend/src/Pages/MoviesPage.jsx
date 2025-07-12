import React from "react";
import sampleData from "../data/sampledata.json";
import SliderRow from "../components/SliderRow";

const MoviesPage = () => {
  const { movies } = sampleData;

  // Unique genres in movies
  const genres = Array.from(
    new Set(
      movies.flatMap((movie) => movie.genres.split(",").map(g => g.trim()))
    )
  );

  return (
    <div style={{ padding: "0 20px" }}>
      {genres.map((genre) => {
        const genreMovies = movies.filter((m) =>
          m.genres.split(",").map(g => g.trim()).includes(genre)
        );
        return <SliderRow key={genre} title={`${genre} Movies`} items={genreMovies} />;
      })}
    </div>
  );
};

export default MoviesPage;
