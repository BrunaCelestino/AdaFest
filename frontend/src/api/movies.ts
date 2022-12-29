import { useQuery } from '@tanstack/react-query';
import { axiosConnection } from './axios-instance';
import { IMovies } from './interfaces/movies';

export const getMovies = async () => {
  try {
    const data = await axiosConnection.get(`/movies`);
    return {
      status: data.status,
      message: 'Sucesso em obter filmes',
      data: data.data,
    };
  } catch (error: any) {
    return {
      data: [],
      message: 'Falha em obter filmes',
      status: error?.response.status,
    };
  }
};

export const useMovies = () => {
  const {
    data: movies,
    isLoading: isLoadingMovies,
    isError,
  } = useQuery(['movies'], () => getMovies());
  return { movies, isLoadingMovies };
};

export const postCreateMovie = async (params: IMovies) => {
    try {
      const data = await axiosConnection.post('/movies', params);
     
      return data;
    } catch (error: any) {
      const response = {
        error: error,
     
      };
      return response;
    }
  };

  export const getMovieById = async (id: string) => {
    try {
      const data = await axiosConnection.get(`/${id}`);
      return {
        status: data.status,
        message: 'Sucesso em obter filme',
        data: data.data,
      };
    } catch (error: any) {
      return {
        data: [],
        message: 'Falha em obter filme',
        status: error?.response.status,
      };
    }
  };

  export const useMovieId = (id: string) => {
    const {
      data: movies,
      isLoading: isLoadingMovies,
      isError,
    } = useQuery(['movie'], () => getMovieById(id));
    return { movies, isLoadingMovies };
  };