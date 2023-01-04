import { useQuery } from '@tanstack/react-query';
import { axiosConnection } from './axios-instance';
import { IEmpresa } from './interfaces/events';

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

  export const postCreateCompany = async (params: IEmpresa) => {
    try {
      const data = await axiosConnection.post('/empresas', params);
     
      
      return {
        status: data.status,
        message: 'Sucesso em registrar empresa',
        data: data.data as IEmpresa,
      };
    } catch (error: any) {

      return {
        message: 'Falha registrar empresa',
        status: 500,
      };;
    }
  };

  export const getCompanyByEmail = async (email: string) => {
    try {
      const data = await axiosConnection.get(`/empresas/empresa?email=${email}`);
      return {
        status: data.status,
        message: 'Sucesso em obter empresa',
        data: data.data,
      };
    } catch (error: any) {
      return {
        message: 'Falha em obter empresa',
        status: 500,
      };
    }
  };

  export const getCompanyByID = async (id: string) => {
    try {
      const data = await axiosConnection.get(`/empresas/${id}`);
      return {
        status: data.status,
        message: 'Sucesso em obter empresa',
        data: data.data,
      };
    } catch (error: any) {
      return {
        message: 'Falha em obter empresa',
        status: 500,
      };
    }
  };