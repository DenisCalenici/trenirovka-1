import { profileAPI, usersAPI } from '../API/API'
const ADD_POST = 'ADD-POST'

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
let initialState = {
  posts: [
    { id: 1, message: 'Hi', likeCount: 17 },
    { id: 2, message: 'How is your word?', likeCount: 18 },
    { id: 3, message: 'Hi', likeCount: 19 },
    { id: 4, message: 'Oo yes', likeCount: 10 },
    { id: 5, message: 'Love', likeCount: 11 },
    { id: 6, message: 'She', likeCount: 12 },
    { id: 7, message: 'Hi', likeCount: 14 },
    { id: 8, message: 'Yo', likeCount: 13 },
  ],

  profile: null,
  status: '',
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Date.now(),
        message: action.newPostText,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }

    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    default:
      return state
  }
}
export const addPostActiveCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
})
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  {
    dispatch(setStatus(response.data))
  }
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) dispatch(setStatus(response.data))
}

export const getUserProfile = (userId) => async (dispatch) => {
  if (!userId) {
    return
  }

  let response = await usersAPI
    .getProfile(userId)
    .dispatch(setUserProfile(response.data))
}
export default profileReducer
