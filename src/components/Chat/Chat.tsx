import MessageDisplay from './MessageDisplay/MessageDisplay'
import MessageSender from './MessageSender/MessageSender'
import ChatHeader from './ChatHeader/ChatHeader'
import styles from './Chat.module.css'
import ChatProps from './Chat.props'
import cn from 'classnames'
import React, { useEffect } from 'react'
import { useCreateJoinEventMutation, useCreateLeaveEventMutation } from '../../generated/schema'

const Chat: React.FC<ChatProps & {className: string}> = (props) => {

  const [createJoinEvent] = useCreateJoinEventMutation()
  const [createLeaveEvent] = useCreateLeaveEventMutation()

  useEffect(() => {
    createJoinEvent()
      .catch(() => {}) // ignore join event duplication error
    return () => {
      createLeaveEvent()
        .catch(() => {}) // ignore leave event duplication error
    }
  }, [createJoinEvent, createLeaveEvent])

  useEffect(() => {
    const unloadCallback = () => {
      createLeaveEvent()
        .catch(() => {}) // ignore leave event duplication error
    }
    window.addEventListener('beforeunload', unloadCallback)

    return () => {
      window.removeEventListener('beforeunload', unloadCallback)
    }
  }, [createLeaveEvent])

  return (
    <div className={cn(styles.wrapper, props.className)}>
      <ChatHeader className={styles.header}/>
      <MessageDisplay className={styles.display}/>
      <MessageSender className={styles.sender}/>
    </div>
  )
}

export default Chat