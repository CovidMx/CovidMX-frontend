import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Team from '../pages/Team';
import StateGraphs from '../pages/StateGraphs';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/estados' component={StateGraphs} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
