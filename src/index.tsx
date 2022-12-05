import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

const authLink = new ApolloLink((operation, forward) => {
  const token = store.getState().auth.accessToken
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  })
  return forward(operation)
})

console.log(`process.env: ${JSON.stringify(process.env)}`)

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER_GRAPHQL_URL || 'http://localhost:3000/graphql'
})

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_SERVER_GRAPHQL_WEBSOCKET_URL || 'ws://localhost:3000/graphql',
  options: {
    reconnect: true
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  authLink.concat(httpLink)
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Provider>
)