import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { Textarea } from '../Common/FormsControls/FormsControls'
import React from 'react'
import {
  required,
  maxLengthCreator,
} from '../../utils/falidators/indexFalidators'
const Dialogs = (props) => {
  let state = props.dialogsPage
  let dialogsElement = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ))

  let messageElement = props.dialogsPage.message.map((m) => (
    <Message message={m.message} id={m.id} />
  ))

  let newMessageBody = state.newMessageBody

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }
  if (!props.isAuth) return <Redirect to={'/login'} />
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElement}</div>

      <div className={classes.messages}>
        <div>{messageElement}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )
}
const maxLength50 = maxLengthCreator(50)
const AddMessagesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Enter your message"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send </button>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessagesForm
)
export default Dialogs
