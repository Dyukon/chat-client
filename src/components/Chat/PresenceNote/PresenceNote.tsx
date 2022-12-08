import { FC } from 'react'
import styles from './PresenceNote.module.css'
import PresenceNoteProps, { PresenceEvent } from './PresenceNote.props'

const PresenceNote: FC<PresenceNoteProps> = (props) => {
  const isJoin = props.presenceEvent===PresenceEvent.Join
  const message = `${props.name} has ${isJoin ? 'joined' : 'left'} the chat.`

  return (
    <div className={styles.wrapper}>
      {message}
    </div>
  )
}

export default PresenceNote