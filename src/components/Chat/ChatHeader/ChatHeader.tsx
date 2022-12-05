import React from 'react'
import { Typography } from '@mui/material'
import ChatHeaderProps from './ChatHeader.props'
import './ChatHeader.css'

const ChatHeader = (props: ChatHeaderProps): JSX.Element => {
  return (
    <>
      <Typography
        variant="h3"
        className='chat_header_wrapper'
      >
        Chat
      </Typography>
    </>
  )
}

export default ChatHeader