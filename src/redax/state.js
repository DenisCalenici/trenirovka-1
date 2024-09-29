import dialogsReducer from './Dialogs-reducer '
import profileReducer from './Profail-reducer'
import sideBarReducer from './SideBar-reducer '

let store = {
  _state: {
    profilePage: {},
    dialogsPage: {},
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
