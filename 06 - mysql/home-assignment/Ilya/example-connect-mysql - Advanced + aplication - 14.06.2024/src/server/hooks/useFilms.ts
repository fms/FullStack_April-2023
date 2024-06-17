import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchFilms = async () => {
  const response = await axios.get('/api/films');
  return response.data;
};

const useFilms = () => {
  return useQuery('films', fetchFilms, {
    staleTime: 10000, // 10 seconds
  });
};

export default useFilms;