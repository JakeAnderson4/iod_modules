import React from 'react';
import usePokemons from '../hooks/usePokemons';
import PokemonCard from './PokemonCard';

const PokemonsContainer = ({ type }) => {
    const pokemons = usePokemons(type);
    
    return (
        <div className='pokemons-container'>
            { pokemons.map((pokemon) => <PokemonCard key={ pokemon.id } pokemon={ pokemon } />) }
        </div>
    );
};

export default PokemonsContainer;

//The PokemonsContainer component displays a list of Pokémon cards filtered by type. It takes a type prop and uses the custom usePokemons hook to fetch Pokémon data based on this type. 
//It then maps over the fetched pokemons array, rendering a PokemonCard for each Pokémon in the pokemons-container div. Each PokemonCard is given a unique key using the Pokémon's id.
