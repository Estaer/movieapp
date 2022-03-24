import axios from 'axios';

const API_KEY = "f66ac82dbc85da661bf50fa05de8a434"
const BASE_URL= "https://api.themoviedb.org/3/"
const IMAGE_BASE_URL= "https://image.tmdb.org/t/p/w500/";

const getMovieCount = async () =>{
    return await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}`)
        .then((response) => {
            return response.data.total_results
        })
        .catch(error => {
            console.error(`Error: ${error}`)
            return []
        });
};

const getPopularMovies = async () =>{
    return await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}`)
        .then((response) => {
            return response.data.results
        })
        .catch(error => {
            console.error(`Error: ${error}`)
            return []
        });
};

const getAllGenres = async () =>{
    return await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
        .then((response) => {
            return response.data.genres
        })
        .catch(error => {
            console.error(`Error: ${error}`)
            return []
        });
};

const searchAllMovies = async (debouncedKeyword, year) => {
    return await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${debouncedKeyword}&year=${year}`)
        .then((response) => {
            return response.data
        })
        .catch(error => {
            console.error(`Error: ${error}`)
            return []
        });
};

export { getPopularMovies, getAllGenres, searchAllMovies, getMovieCount };
