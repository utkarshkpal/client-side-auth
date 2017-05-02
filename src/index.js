import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router,Route,IndexRoute,browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import IndexBody from './components/indexbody';
import Feature from './components/feature'
import Signout from './components/auth/signout';
import RequireAuth from './components/auth/requireAuth'


import reducers from './reducers/index';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <Router history={browserHistory}>
    <Route path = "/" component = {App} >
     <Route path = "signin" component = {Signin} / >
     <Route path = "signup" component = {Signup} / >
     <Route path = "feature" component = {RequireAuth(Feature)} / >
     <Route path = "signout" component = {Signout} / >
    </Route>
   </Router>
  </Provider>
  , document.querySelector('.container'));
