import React from 'react'
import ChatHeaderProps from './ChatHeader.props'
import styles from './ChatHeader.module.css'
import cn from 'classnames'

const ChatHeader: React.FC<ChatHeaderProps & {className: string}> = (props) => {
  return (
    <>
      <div
        className={cn(styles.wrapper, props.className)}
      >
        Chat
      </div>
    </>
  )
}

export default ChatHeader