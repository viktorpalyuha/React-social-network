const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Viktor" },
    { id: 2, name: "Vita" },
    { id: 3, name: "Olha" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Oleh" },
    { id: 6, name: "Vika" },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "What's up?" },
    { id: 4, message: "Howdy" },
    { id: 5, message: "Hows it going" },
    { id: 6, message: "Appreciate it" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };

      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageActionCreator = (newMessageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: newMessageText,
});

export default dialogsReducer;
