import { useState, useEffect } from 'react';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[];
  forms: any[];
  game_indices: any[];
  held_items: any[];
  location_area_encounters: string; // url
  moves: any[];
  sprites: any;
  species: any;
  stats: any[];
  types: any[];
  past_types: any[];

}

// https://pokeapi.co/docs/v2#pokemon
// pokemon name or id
export const usePokeApiPokemon = (pokemon: string | number) => {

  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPokemonData(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return [pokemonData, isLoaded, error] as [typeof pokemonData, typeof isLoaded, typeof error];
}