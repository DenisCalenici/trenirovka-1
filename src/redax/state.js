const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
let store = {
  _state: {
    profilePage: {
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
      newPostText: 'it-Denchik.com',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Anton' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Nastia' },
        { id: 4, name: 'Anna' },
        { id: 5, name: 'Sasha' },
        { id: 6, name: 'Andrey' },
        { id: 7, name: 'Sveta' },
        { id: 8, name: 'Viktor' },
      ],
      message: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your word?' },
        { id: 3, message: 'Hi' },
        { id: 4, message: 'Oo yes' },
        { id: 5, message: 'Love' },
        { id: 6, message: 'She' },
        { id: 7, message: 'Hi' },
        { id: 8, message: 'Yo' },
      ],
      newMessageBody: '',
    },
  },
  _callSubscriber() {
    console.log('state is changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
      this._state.dialogsPage.newMessageBody = action.body
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.newMessageBody = ''
      this._state.dialogsPage.message.push({ id: 9, message: body })
      this._callSubscriber(this._state)
    }
  },
}
export const addPostActiveCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newtext: text,
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
})
export default store
window.store = store
