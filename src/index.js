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

import ChatPage from "./pages/ChatPage";
import StatusPage from './pages/StatusPage';
import GroupPage from './pages/GroupPage';
import AuthPage from './pages/AuthPage';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
              <Route path="/Auth" component={AuthPage} />
              <Route path="/music" component={App} exact />
              <Route path="/chat" component={Chat} />
              <Route path="/status" component={Status} />
              <Route path="/manage" component={Manage} />
              <Route path="/chatPage/:id" component={ChatPage} />
              <Route path="/groupPage/:id" component={GroupPage} />
              <Route path="/statusPage/:id" component={StatusPage} />
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
