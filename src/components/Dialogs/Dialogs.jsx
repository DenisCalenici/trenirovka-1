import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { updateNewMessageBodyCreator } from '../../redax/Dialogs-reducer '
import { sendMessageCreator } from '../../redax/Dialogs-reducer '

const Dialogs = (props) => {
  let state = props.dialogsPage
  let dialogsElement = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ))

  let messageElement = props.dialogsPage.message.map((m) => (
    <Message message={m.message} id={m.id} />
  ))

  let newMessageBody = props.dialogsPage.message.newMessageBody

  let onSendMessageClick = () => {
    props.sendMessage()
  }
  let onNewMessageChange = (e) => {
    console.log('hghghh', props)
    let body = e.target.value
    props.updateNewMessageBody(body)
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElement}</div>

      <div className={classes.messages}>
        <div>{messageElement}</div>

        <div>
          <textarea
            value={newMessageBody}
            placeholder="Enter your message"
            onChange={onNewMessageChange}
          ></textarea>
        </div>

        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs
