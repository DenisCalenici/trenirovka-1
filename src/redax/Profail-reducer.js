const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
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
  newPostText: '',
  profile: null,
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Date.now(),
        message: state.newPostText,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    default:
      return state
  }
}
export const addPostActiveCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})
export default profileReducer
