import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../constants';

const query = 'cards?supertype=pokemon';


export const usePokemons = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${URL}${query}`)
        const json = await res.data.cards;
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};
