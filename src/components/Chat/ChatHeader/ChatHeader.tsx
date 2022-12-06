import React from 'react'
import ChatHeaderProps from './ChatHeader.props'
import './ChatHeader.css'

const ChatHeader = (props: ChatHeaderProps): JSX.Element => {
  return (
    <>
      <div
        className='chat_header_wrapper'
      >
        Chat
      </div>
    </>
  )
}

export default ChatHeader