import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  id: number;
}
export const usePokemon = ( { id }: Props ) => {
  const [ pokemon, setPokemon ] = useState<Pokemon | null>(null);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const getPokemonById = async ( id: number ) => {
    setIsLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const data = await response.json();
    setPokemon({
      id: data.id,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });
    setIsLoading(false);
  }

  useEffect( () => {
    const fetchPokemon = async () => {
      await getPokemonById(id);
    };
    fetchPokemon();
  },  [ id ])
  return {
    // props
    isLoading,
    pokemon,
    // methods
    // computed
    formattedId: id.toString().padStart(3, '0'),
  };
}
