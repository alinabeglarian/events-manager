import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return

  // a GET /events request
  request(`${baseUrl}/events`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const EVENT_FETCHING = 'EVENT_FETCHING'
export const EVENT_FETCHED = 'EVENT_FETCHED'

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

export const loadEvent = (id) => (dispatch) => {
  dispatch({ type: EVENT_FETCHING })
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}

export const EVENT_DELETE_SUCCES = 'EVENT_DELETE_SUCCES'

const eventDeleteSucces = event => ({
  type: EVENT_DELETE_SUCCES,
  event
})

export const deleteEvent = (id) => (dispatch) => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(dispatch(eventDeleteSucces(id)))
    .catch(console.error)
}

export const EVENT_UPDATE_SUCCES = 'EVENT_UPDATE_SUCCES'

const eventUpdateSucces = event => ({
  type: EVENT_UPDATE_SUCCES,
  event
})

export const updateEvent = (id, data) => (dispatch) => {
  request
    .patch(`${baseUrl}/events/${id}`)
    .send(data)
    .then(response =>
      dispatch(eventUpdateSucces(response.body)))
    .catch(console.error)
}