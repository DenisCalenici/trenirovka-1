const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: 'Anton' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Nastia' },
    { id: 4, name: 'Anna' },
    { id: 5, name: 'Sasha' },
    { id: 6, name: 'Andrey' },
    { id: 7, name: 'Sveta' },
    { id: 8, name: 'Viktor' },
  ],
  message: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your word?' },
    { id: 3, message: 'Hi' },
    { id: 4, message: 'Oo yes' },
    { id: 5, message: 'Love' },
    { id: 6, message: 'She' },
    { id: 7, message: 'Hi' },
    { id: 8, message: 'Yo' },
  ],
  newMessageBody: '',
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body }

    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        message: [...state.message, { id: 6, message: body }],
      }

    default:
      return state
  }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
})
export default dialogsReducer
