import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'bca34bbfc009d7fec4acd7837db1b38e',
  },
});

export const trendingMovie = async () => {
  const { data } = await instance.get('trending/movie/day');
  return data;
};

export const getMovieById = async id => {
  const data = await instance.get(`/movie/${id}`);

  return data;
};

export const searchMovie = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });

  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReview = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
