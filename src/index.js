import React from 'react';
import ReactDOM from 'react-dom';
import CineApp from './CineApp';
import './styles/styles.scss';

console.log(process.env)

ReactDOM.render(
  <CineApp />,
  document.getElementById('root')
);
