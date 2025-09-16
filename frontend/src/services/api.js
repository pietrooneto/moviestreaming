const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

function assertEnv() {
  if (!API_KEY || !BASE_URL) {
    throw new Error("Mancano VITE_API_KEY o VITE_BASE_URL");
  }
}

export const getPopularMovies = async () => {
  assertEnv();
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return data.results ?? [];
};

export const searchMovies = async (query) => {
  assertEnv();
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return data.results ?? [];
};
