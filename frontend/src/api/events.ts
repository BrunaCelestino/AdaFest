import { useQuery } from '@tanstack/react-query';
import { axiosConnection } from './axios-instance';
import { IEvents } from './interfaces/events';

export const getEvents = async () => {
  try {
    const data = await axiosConnection.get(`/eventos`);
    return {
      status: data.status,
      message: 'Sucesso em obter eventos',
      data: data.data,
    };
  } catch (error: any) {
    return {
      data: [],
      message: 'Falha em obter eventos',
      status: error?.response.status,
    };
  }
};

export const useEvents = () => {
  const {
    data: events,
    isLoading: isLoadingEvents,
    isError,
  } = useQuery(['events'], () => getEvents());
  return { events, isLoadingEvents };
};

export const postCreateMovie = async (params: IEvents) => {
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

  export const getEventById = async (id: string) => {
    try {
      const data = await axiosConnection.get(`/eventos/${id}`);
      return {
        status: data.status,
        message: 'Sucesso em obter evento',
        data: data.data,
      };
    } catch (error: any) {
      return {
        data: [],
        message: 'Falha em obter evento',
        status: error?.response.status,
      };
    }
  };

  export const useEventId = (id: string) => {
    const {
      data: event,
      isLoading: isLoadingEvent,
      isError,
    } = useQuery(['event'], () => getEventById(id));
    return { event, isLoadingEvent };
  };