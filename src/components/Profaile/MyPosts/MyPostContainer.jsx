import React from 'react'
import MyPosts from './MyPosts'
import {
  addPostActiveCreator,
  updateNewPostTextActionCreator,
} from '../../../redax/Profail-reducer'

const MyPostsContainer = (props) => {
  console.log('MyPostsContainer проверка', props)

  let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch({ type: 'ADD-POST' })
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)

    props.store.dispatch(action)
  }

  return (
    <MyPosts
      updateNewPostText={() => {}}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  )
}
export default MyPostsContainer
