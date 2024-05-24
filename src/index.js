import React from 'react'
import store from './redax/state'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} 
      />
    </BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
