import MessageDisplay from './MessageDisplay/MessageDisplay'
import MessageSender from './MessageSender/MessageSender'
import ChatHeader from './ChatHeader/ChatHeader'
import styles from './Chat.module.css'
import ChatProps from './Chat.props'
import cn from 'classnames'
import React, { useEffect } from 'react'
import { useCreateJoinEventMutation, useCreateLeaveEventMutation } from '../../generated/schema'

const Chat: React.FC<ChatProps & {className: string}> = (props) => {

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
    <div className={cn(styles.wrapper, props.className)}>
      <ChatHeader className={styles.header}/>
      <MessageDisplay className={styles.display}/>
      <MessageSender className={styles.sender}/>
    </div>
  )
}

export default Chat