import { BrowserRouter } from 'react-router-dom'
// import state from './redax/state'
import { addPost } from './redax/state'
import ReactDOM from 'react-dom'
import App from './App'
export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />,
    </BrowserRouter>,
    document.getElementById('root')
  )
}

// export let rerenderEntireTree = (state) => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <App state={state} addPost={addPost} />,
//     </BrowserRouter>,
//     document.getElementById('root')
//   )
// }
