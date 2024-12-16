import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './Profail-reducer'
import dialogsReducer from './Dialogs-reducer '
import sideBarReducer from './SideBar-reducer '
import usersReducer from './users-redax'
import authReducer from './auth-reducer'
import   thunkMiddleware  from 'redux-thunk'
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store
