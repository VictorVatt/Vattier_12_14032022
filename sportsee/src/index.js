import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';

import Header from './components/Header/Header';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />

  </React.StrictMode>,
  document.getElementById('root')
);


