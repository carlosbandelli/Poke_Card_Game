import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username: string) => {
    setUsername(username);
    setAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {authenticated ? (
            <Home username={username} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
