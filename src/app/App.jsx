import React from 'react';
import { Home } from '../pages/Home';
import { GlobalStyles } from './App.styles';

const App = () => {
    GlobalStyles();
    return (
      <Home />
    );
};
export { App };
