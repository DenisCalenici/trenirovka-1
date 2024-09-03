import { combineReducers, createStore } from 'redux'
import profileReducer from './Profail-reducer'
import dialogsReducer from './Dialogs-reducer '
import sideBarReducer from './SideBar-reducer '

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sideBarReducer,
})
let store = createStore(reducers)

export default store
