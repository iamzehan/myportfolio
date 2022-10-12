import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
// import ScrollTop from './components/ScrollTop';

ReactDOM.render(
  <>
    <Router>
      {/*<ScrollTop>*/}
        <ApolloProvider client={client}>
          <App/>
        </ApolloProvider>
      {/*</ScrollTop>*/}
    </Router>
  </>,
  document.getElementById('root')
);
