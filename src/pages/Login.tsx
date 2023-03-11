import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

type LoginProps = {
  onLogin: (username: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) =>{
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim() === '') {
      setError('Por favor, digite um nome.');
      return;
    }
    onLogin(name);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Digite seu nome:</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="border-gray-400 border-2 rounded-md py-2 px-3 mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
