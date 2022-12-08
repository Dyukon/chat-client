import React from 'react'
import ChatHeaderProps from './ChatHeader.props'
import './ChatHeader.css'
import cn from 'classnames'

const ChatHeader: React.FC<ChatHeaderProps & {className: string}> = (props) => {
  return (
    <>
      <div
        className={cn('chat_header_wrapper', props.className)}
      >
        Chat
      </div>
    </>
  )
}

export default ChatHeader