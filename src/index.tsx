import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
)