import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsElements = props.posts.map((p, index, array) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ))
  let newPostElement = React.createRef()
  let addPost = () => {
    let text = newPostElement.current.value

    props.addPost(text)
    newPostElement.current.value = ''
  }
  

  return (
    <>
      <div className={classes.postsBlocke}>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
