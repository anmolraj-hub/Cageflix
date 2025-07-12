import { useState } from "react";
import Fuse from "fuse.js";
import sampleData from "../sampleData.json";

export default function useMovies() {
  const [movies] = useState(sampleData);
  const fuse = new Fuse(movies, {
    keys: ["title", "genres", "plot", "cast"],
    threshold: 0.4,
  });
  const [filtered, setFiltered] = useState(movies);

  const search = (q) => {
    if (!q) setFiltered(movies);
    else setFiltered(fuse.search(q).map(r => r.item));
  };

  return { filtered, search };
}
