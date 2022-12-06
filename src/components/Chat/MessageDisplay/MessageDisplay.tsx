import React, { useCallback, useEffect, useRef, useState } from 'react'
import MessageDisplayProps from './MesageDisplay.props'
import './MessageDisplay.css'
import cn from 'classnames'
import ChatMessage from '../ChatMessage/ChatMessage'
import { Message, OnMessageAddedDocument, useGetMessagesQuery } from '../../../generated/schema'

const MessageDisplay = (props: MessageDisplayProps): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([])
  // const messages = useAppSelector(selectMessages)

  const { subscribeToMore, loading, error } = useGetMessagesQuery({
    onCompleted: ({ messages }) => {
      setMessages(messages)
    },
  })

  const subscribeToNewMessages = useCallback(() => {
    subscribeToMore({
      document: OnMessageAddedDocument,
      updateQuery: (prev, { subscriptionData }: any) => {
        console.log(`updateQuery`)
        if (!subscriptionData) {
          return prev
        }
        const newItem = subscriptionData.data.messageAdded
        console.log(`newItem: ${JSON.stringify(newItem)}`)
        return Object.assign({}, prev, {
          messages: [...prev.messages, newItem]
        })
      }
    })
  }, [subscribeToMore])

  const bottomRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    subscribeToNewMessages()
  }, [subscribeToNewMessages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView()
  }, [messages])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{`Error: ${error}`}</div>
  }

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