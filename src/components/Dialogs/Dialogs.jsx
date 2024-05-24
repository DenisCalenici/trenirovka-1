import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
const Dialogs = (props) => {
  console.log('proverka', props)
  let dialogsElement = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ))

  let messageElement = props.state.message.map((m) => (
    <Message message={m.message} id={m.id} />
  ))
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElement}</div>

      <div className={classes.messages}>{messageElement}</div>
    </div>
  )
}
export default Dialogs
