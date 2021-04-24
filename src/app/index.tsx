import React, { useEffect } from 'react';
import { Router } from 'react-router';
import { history } from '../service/history';
import RouteApp from './route';

const App = () => {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Router history={history}>
        <RouteApp />
        
      </Router>
    </div>
  );
};

export default App;
