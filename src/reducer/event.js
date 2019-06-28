import { EVENT_FETCHED, EVENT_FETCHING, EVENT_UPDATE_SUCCES } from '../actions/events'

export default (state = {}, action) => {
  switch(action.type) {
    case EVENT_FETCHING:
      return {}
    case EVENT_FETCHED:
      return action.event
    case EVENT_UPDATE_SUCCES:
      return action.event
    default:
      return state
  }
}