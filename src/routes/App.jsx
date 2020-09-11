import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Team from '../pages/Team';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/team' component={Team} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
