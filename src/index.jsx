import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HelloWorld from './components/HelloWorld'

import './styles/app.scss';
//shows compilation error
render((
<Router>
<Route path='/' component={HelloWorld} />
</Router>
),
  document.getElementById('app')
)