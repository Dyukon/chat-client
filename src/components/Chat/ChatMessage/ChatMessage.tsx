import ChatMessageProps from './ChatMessage.props'
import './ChatMessage.css'
import dateformat from 'dateformat'
import cn from 'classnames'
import { selectUserId } from '../../../features/auth/auth.slice'
import { useAppSelector } from '../../../hooks'

const ChatMessage = (props: ChatMessageProps): JSX.Element => {
  const myId = useAppSelector(selectUserId)
  return (
    <div className={cn(
      'message_wrapper',
        props.message.senderId === myId ? 'message_my' : 'message_alien'
      )}
    >
      <div className='message_top'>
        <div className='message_sender'>
          {props.message.senderName}
        </div>
        <div className='message_time'>
          {formatDate(props.message.createdAt)}
        </div>
      </div>
      <div className='message_text'>
        {props.message.text}
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