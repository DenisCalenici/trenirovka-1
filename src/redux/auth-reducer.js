import { stopSubmit } from 'redux-form'
import { authAPI } from '../API/API'
const SET_USER_DATA = 'SET_USER_DATA '

let initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false,
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export const setAuthUserData = ({ userId, email, login, isAuth }) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me()

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data
    dispatch(setAuthUserData({ userId: id, email, login, isAuth: !!id }))
  }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : 'Some error'
    dispatch(
      stopSubmit('login', {
        _error: message,
      })
    )
  }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()

  if (response.data.resultCode === 0) {
    dispatch(
      setAuthUserData({ userId: null, email: null, login: null, isAuth: false })
    )
  }
}

export default authReducer
