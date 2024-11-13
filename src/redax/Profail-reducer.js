const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
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
      console.log('hjffjfjf', action)
      return {
        ...state,
        newPostText: action.newText,
      }
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
export default profileReducer
