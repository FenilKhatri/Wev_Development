const API_KEY = "0ea07c899210c7b55b3df9a70339b89b";
const BASE_URI = "https://api.themoviedb.org/3";

export const getMovies = async () => {
      const response = await fetch(`${BASE_URI}/movie/popular?api_key=${API_KEY}`)
      const data = await response.json();
      return data.results
};

export const searchMovies = async (query) => {
      const response = await fetch(`${BASE_URI}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
      const data = await response.json();
      return data.results
};