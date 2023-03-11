import React from 'react';
import { Pokemon } from '../types/pokemon';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="border-2 border-gray-300 rounded-md p-4 mb-4 w-full">
      <img src={pokemon.imageUrl} alt={pokemon.name} className="mx-auto" />
      <h2 className="text-xl font-bold">{pokemon.name}</h2>
      <div className="flex justify-between mb-2">
        <span>ID: {pokemon.id}</span>
        <span>Pontos: {pokemon.points}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tipo: {pokemon.type}</span>
        <span>Peso: {pokemon.weight / 10}kg</span>
      </div>
      <div className="flex justify-between">
        <span>Altura: {pokemon.height / 10}m</span>
      </div>
    </div>
  );
};

export default PokemonCard;
