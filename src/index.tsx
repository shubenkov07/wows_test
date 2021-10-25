import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { App } from './components/App/App';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://vortex.worldofwarships.ru/api/graphql/glossary/',
    cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
