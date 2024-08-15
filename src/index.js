import React from 'react'
import store from './redax/redux-store'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
let rerenderEntireTree = (state) => {
  console.log('proverka index', state)
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})
