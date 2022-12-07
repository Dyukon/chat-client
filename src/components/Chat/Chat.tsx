import MessageDisplay from './MessageDisplay/MessageDisplay'
import MessageSender from './MessageSender/MessageSender'
import ChatHeader from './ChatHeader/ChatHeader'
import './Chat.css'
import ChatProps from './Chat.props'
import cn from 'classnames'
import React, { useEffect } from 'react'
import { useCreateJoinEventMutation, useCreateLeaveEventMutation } from '../../generated/schema'

const Chat: React.FC<ChatProps> = (props) => {

  const [doJoin] = useCreateJoinEventMutation()
  const [doLeave] = useCreateLeaveEventMutation()

  useEffect(() => {
    console.log(`Chat mounted`)
    doJoin()
    return () => {
      console.log(`Chat unmounted`)
      doLeave()
    }
  }, [doJoin, doLeave])

  return (
    <div className={cn('chat_wrapper', props.className)}>
      <ChatHeader className='chat_header'/>
      <MessageDisplay className='chat_display'/>
      <MessageSender className='chat_sender'/>
    </div>
  )
}

export default Chat