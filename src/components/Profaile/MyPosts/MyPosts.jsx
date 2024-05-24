import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  console.log('проверка', props)
  let postsElements = props.posts.map((p, index, array) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ))
  let newPostElement = React.createRef()

  let addPost = () => {
    if (newPostElement.current.value) {
      props.dispatch({ type: 'ADD-POST' })
      newPostElement.current.value = ''
    }
  }

  let onPostChange = () => {
    let text = newPostElement.current.value

    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
    props.dispatch(action)
  }

  return (
    <>
      <div className={classes.postsBlocke}>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </>
  )
}
export default MyPosts
