import { usePokeApiPokemon } from "./usePokeApi";

export const Pokemon = ({ name }: { name: string }) => {
  const [pokemonData, isLoaded, error] = usePokeApiPokemon(name);

  if (error) {
    return <div>Error: {error}</div>; // error.message
  } else if (!isLoaded || pokemonData === null) {
    return <div>Loading...</div>;
  } else {
    return <div>{JSON.stringify(pokemonData)}</div>;
  }
};
