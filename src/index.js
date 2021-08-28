import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createHistory from "history/createBrowserHistory";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const history = createHistory();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Router history={history}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Router>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
