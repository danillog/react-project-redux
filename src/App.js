import React from "react";
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Header from './component/Header';
import Routes from "./router";
import history from './services/history';
import store from './store';
import "./style.css";

export default function App() {
  return (
    <Provider store ={ store}>
        <Router history={history} >
          <Header />
          <Routes />
        </Router>
    </Provider>
  );
}
