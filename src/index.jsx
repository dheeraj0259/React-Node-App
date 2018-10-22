import 'babel-polyfill';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import rootReducer from './reducers';

import HelloWorld from './components/HelloWorld'

const store = createStore(rootReducer, applyMiddleware(thunk));

//shows compilation error
render((
<Provider store={store}>
<Router>
<Switch>
<Route exact path='/helloworld' component={HelloWorld} />
</Switch>
</Router>
</Provider>
),
  document.getElementById('app')
)