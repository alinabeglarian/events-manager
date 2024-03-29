import React from 'react'
import { Link } from 'react-router-dom'

export default function EventsList(props) {
  return (
    <div>
      {!props.events && 'Loading..'}
      <ul>
        {props.events && props.events.map((event) =>
          <li key={event.id}>
            <Link to={`events/${event.id}`}>{event.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}