import React from "react";
import "./style.css";
import {BrowserRouter} from 'react-router-dom';
import Routes from "./router"
import Header from './component/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
