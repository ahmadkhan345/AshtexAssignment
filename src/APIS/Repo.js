import axios from 'axios';

const apiKey = '3bcbd9c27839f08b4236b6d42a4a00b5';

export async function fetchMovies() {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching movie data:', error);
    }
}


export async function getGenre(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) { 
        throw new Error('Error fetching movie data:', error);
    }
}
