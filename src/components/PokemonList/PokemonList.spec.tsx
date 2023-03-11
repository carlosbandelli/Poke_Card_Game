import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonList from './PokemonList';

const mockPokemons = [
  {
    id: 1,
    name: 'Pikachu',
    type: 'Electric',
    weight: 60,
    height: 40,
    points: 100,
    imageUrl: 'https://example.com/pikachu.jpg',
  },
  {
    id: 2,
    name: 'Charmander',
    type: 'Fire',
    weight: 85,
    height: 60,
    points: 80,
    imageUrl: 'https://example.com/charmander.jpg',
  },
];

it('PokemonList component', () => {
    expect(<PokemonList pokemons={mockPokemons} />);
  });

