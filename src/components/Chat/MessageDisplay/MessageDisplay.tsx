import React, { useEffect, useRef } from 'react'
import MessageDisplayProps from './MesageDisplay.props'
import './MessageDisplay.css'
import cn from 'classnames'
import { useAppSelector } from '../../../hooks'
import { selectMessages } from '../../../features/chatSlice'
import ChatMessage from '../ChatMessage/ChatMessage'

const MessageDisplay = (props: MessageDisplayProps): JSX.Element => {
  const messages = useAppSelector(selectMessages)

  const bottomRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView()
  }, [])

  return (
    <div className={cn('display_wrapper', props.className)}>
      {messages.map(message =>
        <ChatMessage
          message={message}
          key={message.id}
        />
      )}
      <div ref={bottomRef}/>
    </div>
  )
}

export default MessageDisplay