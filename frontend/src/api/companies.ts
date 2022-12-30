import { useQuery } from '@tanstack/react-query';
import { axiosConnection } from './axios-instance';

export const getCompanies = async () => {
  try {
    const data = await axiosConnection.get(`/empresas`);
    return {
      status: data.status,
      message: 'Sucesso em obter empresas',
      data: data.data,
    };
  } catch (error: any) {
    return {
      data: [],
      message: 'Falha em obter empresas',
      status: error?.response.status,
    };
  }
};

export const useCompanies = () => {
    const {
      data: companies,
      isLoading: isLoadingCompanies,
      isError,
    } = useQuery(['companies'], () => getCompanies());
    return { companies, isLoadingCompanies };
  };