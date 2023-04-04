import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const KEY_REQUES = 'b8cc7192580846817e308e88dc3da3b8';

const trendingMoviesRequest = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/trending/movie/day?api_key=${KEY_REQUES}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
const searchMoviesRequest = async productName => {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/search/multi?api_key=${KEY_REQUES}&language=en-US&query=${productName}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
const movieDetailsRequest = async (movieId, setPending) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}?api_key=${KEY_REQUES}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    // setPending(false);
  }
};
const castRequest = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY_REQUES}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
};
const reviewsRequest = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${KEY_REQUES}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export {
  trendingMoviesRequest,
  castRequest,
  searchMoviesRequest,
  movieDetailsRequest,
  reviewsRequest,
};
