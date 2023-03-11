import React from 'react';
import { Pokemon } from '../types/pokemon';

interface Props {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="bg-white rounded-md shadow-md">
          <div className="overflow-hidden rounded-t-md">
            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">
              {pokemon.name} (#{pokemon.id})
            </h2>
            <p className="mb-2">
              <strong>Tipo:</strong> {pokemon.type}
            </p>
            <p className="mb-4">
              <strong>Peso:</strong> {pokemon.weight / 10} kg
            </p>
            <p className="mb-4">
              <strong>Altura:</strong> {pokemon.height / 10} m
            </p>
            <p>
              <strong>Pontos:</strong> {pokemon.points}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
