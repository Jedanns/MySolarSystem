import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CelestialBodyList from './components/CelestialBodyList';
import CelestialBody from './components/CelestialBody';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CelestialBodyList} />
        <Route path="/bodies/:id" component={CelestialBody} />
      </Switch>
    </Router>
  );
}

export default App;
