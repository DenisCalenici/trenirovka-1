import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './Profile-reducer'
import dialogsReducer from './Dialogs-reducer '
import sideBarReducer from './SideBar-reducer '
import usersReducer from './users-redux'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
