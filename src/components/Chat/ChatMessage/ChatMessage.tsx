import ChatMessageProps from './ChatMessage.props'
import styles from './ChatMessage.module.css'
import dateformat from 'dateformat'
import cn from 'classnames'
import { selectUserId } from '../../../features/auth/auth.slice'
import { useAppSelector } from '../../../hooks'
import React from 'react'

const ChatMessage: React.FC<ChatMessageProps> = (props) => {
  const myId = useAppSelector(selectUserId)
  return (
    <div className={cn(
        styles.wrapper,
        props.senderId === myId ? styles.my : styles.alien
      )}
    >
      <div className={styles.top}>
        <div className={styles.sender}>
          {props.senderName}
        </div>
        <div className={styles.time}>
          {formatDate(props.isoDate)}
        </div>
      </div>
      <div className={styles.text}>
        {props.message}
      </div>
    </div>
  )
}

function formatDate(isoDate: string): string {
  const now = new Date()
  const date = new Date(isoDate)
  const daysPassed = (now.getTime() - date.getTime()) / 1000 / 86400
  if (daysPassed < 1) {
    return dateformat(date, 'HH:MM:ss')
  }
  if (daysPassed < 30) {
    return dateformat(date, 'mm/dd HH:MM:ss')
  }
  return dateformat(date, 'mm/dd/yyyy HH:MM:ss')
}

export default ChatMessage