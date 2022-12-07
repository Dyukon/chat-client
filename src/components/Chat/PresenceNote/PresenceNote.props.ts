export enum PresenceEvent {
  Join = 'join',
  Leave = 'leave'
}

export default interface PresenceNoteProps {
  name: string
  presenceEvent: PresenceEvent
}