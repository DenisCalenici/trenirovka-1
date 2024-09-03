import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { updateNewMessageBodyCreator } from '../../redax/Dialogs-reducer '
import { sendMessageCreator } from '../../redax/Dialogs-reducer '
import Dialogs from './/Dialogs'

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }
  return (
    <Dialogs
      updateNewMessageBodyCreator={onNewMessageChange}
      sendMessageCreator={onSendMessageClick}
      dialogsPage={state}
    />
  )
}
export default DialogsContainer
