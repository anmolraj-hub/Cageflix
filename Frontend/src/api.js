export async function fetchMovies() {
  const res = await fetch('/api/movies');
  return res.json();
}

export async function fetchMovie(id) {
  const res = await fetch(`/api/movies/${id}`);
  return res.json();
}
