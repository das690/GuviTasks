import axios from 'axios';

const API_KEY = '9a4486ac';
const BASE_URL = 'https://www.omdbapi.com/';

// Fetch movies with pagination and type filtering via API
export const fetchMovies = async (query, page = 1, type = '') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        page: page,
        type: type !== 'all' ? type : '' // Sends 'movie', 'series', 'episode', or nothing
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies. Please try again later.');
  }
};

// Fetch detailed information for a single movie
export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: id,
        plot: 'full'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie details.');
  }
};