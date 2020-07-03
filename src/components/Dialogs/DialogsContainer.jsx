import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessage = () => {
    props.store.dispatch( addMessageActionCreator() );
  };

  let onMessageChange = (text) => {
    props.store.dispatch(
      updateNewMessageActionCreator(text)
    );
  };

  return (
    <Dialogs updateNewMessageText = { onMessageChange } sendMessage = { onSendMessage } 
    dialogsPage = { state }/>
  );
};

export default DialogsContainer;
