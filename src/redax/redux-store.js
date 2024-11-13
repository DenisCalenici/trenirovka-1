import { combineReducers, createStore } from 'redux'
import profileReducer from './Profail-reducer'
import dialogsReducer from './Dialogs-reducer '
import sideBarReducer from './SideBar-reducer '
import usersReducer from './users-redax'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sideBarReducer,
  usersPage:usersReducer
})
let store = createStore(reducers)

export default store
