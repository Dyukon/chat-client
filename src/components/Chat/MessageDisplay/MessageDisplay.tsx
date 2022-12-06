import React, { useEffect, useRef, useState } from 'react'
import MessageDisplayProps from './MesageDisplay.props'
import './MessageDisplay.css'
import cn from 'classnames'
import ChatMessage from '../ChatMessage/ChatMessage'
import {
  Message,
  useGetMessagesQuery,
  useOnMessageAddedSubscription
} from '../../../generated/schema'

const MessageDisplay: React.FC<MessageDisplayProps> = (props) => {
  const [messages, setMessages] = useState<Message[]>([])

  const bottomRef = useRef<null | HTMLDivElement>(null)

  useGetMessagesQuery({
    onCompleted: ({ messages }) => {
      setMessages(messages)
    },
  })

  useOnMessageAddedSubscription({
    onData: ({ data }: any) => {
      setMessages([
        ...messages,
        data.data.messageAdded
      ])
    }
  })

  useEffect(() => {
    bottomRef.current?.scrollIntoView()
  }, [messages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView()
  }, [messages])

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