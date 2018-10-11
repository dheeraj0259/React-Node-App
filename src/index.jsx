import React from 'react';
import ReactDom from 'react-dom';

import HelloWorld from './components/HelloWorld'

import './styles/app.scss';

ReactDom.render(
  <HelloWorld />,
  document.getElementById('app')
)
