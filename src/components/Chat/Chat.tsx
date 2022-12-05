import MessageDisplay from './MessageDisplay/MessageDisplay'
import MessageSender from './MessageSender/MessageSender'
import ChatHeader from './ChatHeader/ChatHeader'
import './Chat.css'
import ChatProps from './Chat.props'
import cn from 'classnames'
import { useQuery } from '@apollo/client'
import { GetMessagesDocument, OnMessageAddedDocument } from '../../gql/graphql'
import { useAppDispatch } from '../../hooks'
import { setMessages } from '../../features/chat/chat.slice'
import { useCallback, useEffect } from 'react'

const Chat = (props: ChatProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const { subscribeToMore, loading, error } = useQuery(GetMessagesDocument, {
    onCompleted: ({ messages }) => {
      dispatch(setMessages(messages))
    },
  })

  const subscribeToNewMessages = useCallback(() => {
    subscribeToMore({
      document: OnMessageAddedDocument,
      updateQuery: (prev, { subscriptionData }) => {
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

  useEffect(() => {
    subscribeToNewMessages()
  }, [subscribeToNewMessages])

  if (loading) {
    return (<div>Loading...</div>)
  }

  if (error) {
    return (<div>{`Error: ${error}`}</div>)
  }

  return (
    <div className={cn('chat_wrapper', props.className)}>
      <ChatHeader className='chat_header'/>
      <MessageDisplay className='chat_display'/>
      <MessageSender className='chat_sender'/>
    </div>
  )
}

export default Chat