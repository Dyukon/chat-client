import React, { useEffect, useRef, useState } from 'react'
import MessageDisplayProps from './MesageDisplay.props'
import './MessageDisplay.css'
import cn from 'classnames'
import ChatMessage from '../ChatMessage/ChatMessage'
import {
  Event, EventType, useGetEventsQuery,
  useOnEventAddedSubscription,
} from '../../../generated/schema'
import PresenceNote from '../PresenceNote/PresenceNote'
import { PresenceEvent } from '../PresenceNote/PresenceNote.props'

const MessageDisplay: React.FC<MessageDisplayProps & {className: string}> = (props) => {
  const [events, setEvents] = useState<Event[]>([])

  const bottomRef = useRef<null | HTMLDivElement>(null)

  useGetEventsQuery({
    onCompleted: ({ events }) => {
      console.log(`onCompleted - events: ${JSON.stringify(events)}`)
      setEvents(events)
    },
  })

  useOnEventAddedSubscription({
    onData: ({ data }: any) => {
      console.log(`onData - data: ${JSON.stringify(data)}`)
      setEvents([
        ...events,
        data.data?.eventAdded
      ])
    }
  })

  useEffect(() => {
    console.log(`MessageDisplay is mounted`)
    bottomRef.current?.scrollIntoView()
    return () => {
      console.log(`MessageDisplay is unmounted`)
    }
  }, [events])

  return (
    <div className={cn('display_wrapper', props.className)}>
      {events.map(event => {
        if (event.type===EventType.Message) {
          return <ChatMessage
            key={event.id}
            senderId={event.senderId}
            senderName={event.senderName}
            isoDate={event.createdAt}
            message={event.message!}
          />
        }
        return <PresenceNote
          key={event.id}
          name={event.senderName}
          presenceEvent={event.type===EventType.Join ? PresenceEvent.Join : PresenceEvent.Leave}
        />
      })}
      <div ref={bottomRef}/>
    </div>
  )
}

export default MessageDisplay