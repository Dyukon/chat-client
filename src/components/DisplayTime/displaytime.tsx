import { useQuery } from '@apollo/client'
import { GetTimeDocument } from '../../gql/graphql'
import React from 'react'

function DisplayTime() {
  const {loading, error, data} = useQuery(GetTimeDocument)

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error : {error.message}</p>
  }

  return (
    <div>
      Time: {data?.time}
    </div>
  )
}

export default DisplayTime