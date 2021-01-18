import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import Routes from "./router";
import store from './store';
import "./style.css";

export default function App() {
  return (
    <Provider store ={ store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
