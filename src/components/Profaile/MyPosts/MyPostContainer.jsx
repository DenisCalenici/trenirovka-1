import React from 'react'
import MyPosts from './MyPosts'
import {
  addPostActiveCreator,
  updateNewPostTextActionCreator,
} from '../../../redax/Profail-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActiveCreator())
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
