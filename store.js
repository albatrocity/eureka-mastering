import { createStore, applyMiddleware, combineReducers } from 'redux'
import {reducer as burgerMenu} from 'redux-burger-menu'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  audio_playing: false,
  audio_url: null,
  audio_current_position: 0,
  audio_loading: false,
}

export const actionTypes = {
  AUDIO_PLAY: 'AUDIO_PLAY',
  AUDIO_PAUSE: 'AUDIO_PAUSE',
  AUDIO_SET_TIME: 'AUDIO_SET_TIME',
  AUDIO_LOADING_SET: 'AUDIO_LOADING_SET',
}

// REDUCERS
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUDIO_PLAY:
      return Object.assign({}, state, {
        audio_playing: true,
        audio_loading: true,
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
    case actionTypes.AUDIO_LOADING_SET:
      return Object.assign({}, state, {
        audio_loading: action.payload
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
export const setAudioLoading = () => dispatch => {
  return dispatch({ type: actionTypes.AUDIO_LOADING_SET })
}

const reducer = combineReducers({
  app: appReducer, burgerMenu
})

export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}
