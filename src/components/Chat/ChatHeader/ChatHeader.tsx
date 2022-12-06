import React from 'react'
import ChatHeaderProps from './ChatHeader.props'
import './ChatHeader.css'

const ChatHeader: React.FC<ChatHeaderProps> = (props) => {
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