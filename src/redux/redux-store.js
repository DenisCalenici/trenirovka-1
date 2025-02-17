import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReducer from './Profile-reducer'
import dialogsReducer from './Dialogs-reducer '
import sideBarReducer from './SideBar-reducer '
import usersReducer from './users-redux'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer '
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)
window._store_ = store

export default store
