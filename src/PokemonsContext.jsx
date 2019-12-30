import React, { createContext } from 'react';
import { usePokemons } from './utils/usePokemons';

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
  const pokemons = usePokemons();
  return (
    <PokemonsContext.Provider value={pokemons.response}>
      {children}
    </PokemonsContext.Provider>
  );
};
