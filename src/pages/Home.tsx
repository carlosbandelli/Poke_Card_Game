import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pokemon } from '../types/pokemon';
import PokemonList from '../components/PokemonList/PokemonList';


interface HomeProps {
  username: string;
}

const Home: React.FC<HomeProps> = ({ username }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [newCardsCount, setNewCardsCount] = useState(0);

  const loadInitialPokemons = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`);
      const results = response.data.results;
      const promises = results.map(async (result: any) => {
        const response = await axios.get(result.url);
        const pokemon: Pokemon = {
          id: response.data.id,
          name: response.data.name,
          type: response.data.types.map((type: any) => type.type.name).join(', '),
          weight: response.data.weight,
          height: response.data.height,
          imageUrl: response.data.sprites.front_default,
          points: Math.floor(Math.random() * 11),
        };
        return pokemon;
      });
      const pokemons = await Promise.all(promises);
      setPokemons(pokemons);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Ocorreu um erro ao carregar os pokemons iniciais.');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitialPokemons();
  }, []);

  const handleNewCardClick = async () => {
    if (newCardsCount >= 3) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`);
      const pokemon: Pokemon = {
        id: response.data.id,
        name: response.data.name,
        type: response.data.types.map((type: any) => type.type.name).join(', '),
        weight: response.data.weight,
        height: response.data.height,
        imageUrl: response.data.sprites.front_default,
        points: Math.floor(Math.random() * 11),
      };
      setPokemons([...pokemons, pokemon]);
      setNewCardsCount(newCardsCount + 1);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Ocorreu um erro ao carregar o novo pokemon.');
      setLoading(false);
    }
  };

  const handleShuffleClick = () => {
    setPokemons([...pokemons].sort(() => Math.random() - 0.5));
  };

  const handleResetClick = () => {
    setPokemons([]);
    setNewCardsCount(0);
    loadInitialPokemons();
  };

  return (
    <div className="p-4 relative flex-row-reverse">
     <h1 className="text-2xl font-bold mb-4 absolute top-0 right-0 mt-4 mr-4 flex-row">
  		Olá, {username}! Aqui estão seus pokemons:
	 </h1>
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          <PokemonList pokemons={pokemons} />
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
			  onClick={handleNewCardClick}
		      disabled={newCardsCount >= 3}
			>
				Novo Pokémon
			</button>
			<button
           		className="bg-yellow-500 text-white px-4 py-2 rounded-md ml-2"
           		onClick={handleShuffleClick}
         	>
				Embaralhar
			</button>
			<button
           		className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
           		onClick={handleResetClick}
         	>
				Resetar
			</button>
		  </div>
		</>
	)}
	</div>
	);
};

export default Home;
