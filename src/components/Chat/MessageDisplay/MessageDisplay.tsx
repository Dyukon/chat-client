import React, { useCallback, useEffect, useRef, useState } from 'react'
import MessageDisplayProps from './MesageDisplay.props'
import styles from './MessageDisplay.module.css'
import cn from 'classnames'
import ChatMessage from '../ChatMessage/ChatMessage'
import {
  EventType, OnEventAddedDocument, useGetEventsQuery,
} from '../../../generated/schema'
import PresenceNote from '../PresenceNote/PresenceNote'
import { PresenceEvent } from '../PresenceNote/PresenceNote.props'

const MessageDisplay: React.FC<MessageDisplayProps & {className: string}> = (props) => {
  const bottomRef = useRef<null | HTMLDivElement>(null)

  const [eventCount, setEventCount] = useState(0)

  const { subscribeToMore, loading, error, data } = useGetEventsQuery({
    onCompleted: ({ events }) => {
      setEventCount(events.length)
    }
  })

  const subscribeToNewEvents = useCallback(() => {
    subscribeToMore({
      document: OnEventAddedDocument,
      updateQuery: (prev, { subscriptionData }: any) => {
        if (!subscriptionData) {
          return prev
        }
        const next = {
          events: [...prev.events, subscriptionData.data.eventAdded]
        }
        return next
      }
    })
  }, [subscribeToMore])

  useEffect(() => {
    subscribeToNewEvents()
  }, [subscribeToNewEvents])

  useEffect(() => {
    bottomRef.current?.scrollIntoView()
  }, [eventCount])

  if (loading) {
    return <div>{`Loading...`}</div>
  }

  if (error) {
    return <div>{`Error: ${error}`}</div>
  }

  return (
    <div className={cn(styles.wrapper, props.className)}>
      {data!.events.map(event => {
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