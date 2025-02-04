import { getAuthUserData } from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED '
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
const INITIALIZE = 'INITIALIZE'
let initialState = {
  initialized: false,
}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: false,
      }

    default:
      return state
  }
}

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  //dispatch(somethingelse())
  //dispatch(somethingelse())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
