import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { LoggedStateProvider } from './utils/hooks';

const httpLink = new HttpLink({
  uri: 'http://luminous-chimera-937e01.netlify.app/graphql',
});
const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://luminous-chimera-937e01.netlify.app/graphql',
  })
);

const authLink = setContext((_, { headers }) => {
  console.log(headers);
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('jwt') || '',
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ApolloProvider client={client}>
      <LoggedStateProvider>
        <App />
      </LoggedStateProvider>
    </ApolloProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
