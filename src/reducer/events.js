import { EVENTS_FETCHED, EVENT_CREATE_SUCCESS, EVENT_DELETE_SUCCES } from '../actions/events'

export default (state = null, action) => {
  switch(action.type) {
    case EVENTS_FETCHED:
      return action.events
    case EVENT_CREATE_SUCCESS:
      return [...state,
              action.event]
    case EVENT_DELETE_SUCCES:
      return state.filter((event) => event.id !== action.event)
    default:
      return state
  }
}
