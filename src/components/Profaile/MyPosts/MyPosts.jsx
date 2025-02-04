import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import {
  required,
  maxLengthCreator,
} from '../../../utils/falidators/indexFalidators.js'
import { Textarea } from '../../Common/FormsControls/FormsControls'
const MyPosts = (props) => {
  let postsElements = props.posts.map((p, index, array) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ))
  const maxLength10 = maxLengthCreator(10)
  let newPostElement = React.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  function AddNewPostForm(props) {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Textarea}
            validate={[required, maxLength10]}
            name="newPostText"
          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    )
  }
  AddNewPostForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

  return (
    <div className={classes.postsBlocke}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={classes.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
