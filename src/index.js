import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Chat from './components/Chat';
import Status from './components/Status';
import Manage from './components/Manage';

import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
              <Route path="/" component={App} exact />
              <Route path="/chat" component={Chat} />
              <Route path="/status" component={Status} />
              <Route path="/manage" component={Manage} />
              <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </Provider>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
