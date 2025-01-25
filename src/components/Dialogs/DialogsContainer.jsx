import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redax/Dialogs-reducer '
import React from 'react'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'
let mapStateToProps = (state) => {
  console.log('proverka', state)
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
