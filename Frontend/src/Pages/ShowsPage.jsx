import React from "react";
import sampleData from "../data/sampledata.json";
import SliderRow from "../components/SliderRow";

const ShowsPage = () => {
  const { shows } = sampleData;

  // Unique genres in shows
  const genres = Array.from(
    new Set(
      shows.flatMap((show) => show.genres.split(",").map(g => g.trim()))
    )
  );

  return (
    <div style={{ padding: "0 20px" }}>
      {genres.map((genre) => {
        const genreShows = shows.filter((s) =>
          s.genres.split(",").map(g => g.trim()).includes(genre)
        );
        return <SliderRow key={genre} title={`${genre} Shows`} items={genreShows} />;
      })}
    </div>
  );
};

export default ShowsPage;
