import React from 'react'
import './App.css'
import { gql, useQuery } from '@apollo/client'

const GET_TIME = gql`
  query GetTime {
      time
  }
`

function DisplayTime() {
  const { loading, error, data } = useQuery(GET_TIME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      Time: {data.time}
    </div>
  )
}

function App() {
  return (
    <div>
      <h2>My first Apollo app</h2>
      <br/>
      <DisplayTime/>
    </div>
  )
}

export default App
