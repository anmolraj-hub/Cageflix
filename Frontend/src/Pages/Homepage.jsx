import React from "react";
import sampleData from "../data/sampledata.json";
import SliderRow from "../components/SliderRow";

const HomePage = () => {
  const { movies, shows } = sampleData;

  // Helper: get unique genres from movies & shows
  const allGenres = Array.from(
    new Set(
      [...movies, ...shows]
        .flatMap((item) => item.genres.split(","))
        .map((g) => g.trim())
    )
  );

  return (
    <div style={{ padding: "0 20px" }}>
      {allGenres.map((genre) => {
        // Filter movies and shows for this genre
        const genreItems = [
          ...movies.filter((m) => m.genres.split(",").map(g => g.trim()).includes(genre)),
          ...shows.filter((s) => s.genres.split(",").map(g => g.trim()).includes(genre)),
        ];

        return (
          <SliderRow key={genre} title={`${genre} Titles`} items={genreItems} />
        );
      })}
    </div>
  );
};

export default HomePage;
