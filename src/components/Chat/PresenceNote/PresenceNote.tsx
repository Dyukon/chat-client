import { FC } from 'react'
import './PresenceNote.css'
import PresenceNoteProps, { PresenceEvent } from './PresenceNote.props'

const PresenceNote: FC<PresenceNoteProps> = (props) => {
  const isJoin = props.presenceEvent===PresenceEvent.Join
  const message = `${props.name} has ${isJoin ? 'joined' : 'left'} the chat.`

  return (
    <div className='presence_note_wrapper'>
      {message}
    </div>
  )
}

export default PresenceNote