import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import HelloWorld from './components/HelloWorld'

import './styles/app.scss';
//shows compilation error
ReactDom.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)
