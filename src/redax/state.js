import dialogsReducer from './Dialogs-reducer '
import profileReducer from './Profail-reducer'
import sideBarReducer from './SideBar-reducer '

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
    sidebar: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.subscribe = sideBarReducer(this._state.subscribe, action)

    this._callSubscriber(this._state)
  },
}

export default store
window.store = store
