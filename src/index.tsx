import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})

console.log(`*** before query`)

client.query({
  query: gql`
    query GetTime {
      time
    }
  `
})
.then((result) => console.log(`*** query result: ${JSON.stringify(result)}`));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
)