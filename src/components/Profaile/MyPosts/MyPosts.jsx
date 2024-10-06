import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  console.log('проверка myposts', props)
  let postsElements = props.posts.map((p, index, array) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ))
  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = (event) => {
    console.log('Евент бл', event.target.value)

    //let text = newPostElement.current.value
    props.updateNewPostText(event.target.value)
  }
  console.log('проверка props.newPostText', props.newPostText)
  return (
    <div className={classes.postsBlocke}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            // ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  )
}
export default MyPosts
