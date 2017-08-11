import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  audio_playing: false,
  audio_url: null,
  audio_current_position: 0,
}

export const actionTypes = {
  AUDIO_PLAY: 'AUDIO_PLAY',
  AUDIO_PAUSE: 'AUDIO_PAUSE',
  AUDIO_SET_TIME: 'AUDIO_SET_TIME',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.AUDIO_PLAY:
      return Object.assign({}, state, {
        audio_playing: true,
        audio_url: action.payload,
      })
    case actionTypes.AUDIO_PAUSE:
      return Object.assign({}, state, {
        audio_playing: false,
      })
    case actionTypes.AUDIO_SET_TIME:
      return Object.assign({}, state, {
        audio_current_position: action.payload.played,
      })
    default: return state
  }
}

// ACTIONS
export const playAudio = (url) => dispatch => {
  return dispatch({ type: actionTypes.AUDIO_PLAY, payload: url })
}
export const pauseAudio = () => dispatch => {
  return dispatch({ type: actionTypes.AUDIO_PAUSE })
}
export const advanceAudio = () => dispatch => {
  return dispatch({ type: actionTypes.AUDIO_SET_TIME })
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}
