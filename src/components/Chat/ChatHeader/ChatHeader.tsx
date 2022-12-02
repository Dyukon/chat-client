import React from 'react'
import { Typography } from '@mui/material'
import ChatHeaderProps from './ChatHeader.props'

const ChatHeader = (props: ChatHeaderProps): JSX.Element => {
  return (
    <>
      <Typography variant="h3">
        Chat
      </Typography>
    </>
  )
}

export default ChatHeader