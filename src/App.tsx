import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Color } from './features/color/Color';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import {
  NavBar,
  Loading,
  Profile,
  ExternalApi,
  Home,
  PrivateRoute
} from './components';
import {
  Switch,
  Route
} from 'react-router';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Color />
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/external-api" exact component={ExternalApi} />
      </Switch>
    </div>
  );
}

export default App;
