import axios, { AxiosError, RawAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

axios.defaults.baseURL = '';

const useAxios = (axiosParams: RawAxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    await axios
      .request(params)
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const sendData = () => {
    fetchData(axiosParams);
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, [axiosParams]);

  return { response, error, loading, sendData };
};

export default useAxios;
