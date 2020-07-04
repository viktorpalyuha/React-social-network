import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onSendMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageActionCreator(text));
        };

        return (
          <Dialogs
            updateNewMessageText={onMessageChange}
            sendMessage={onSendMessage}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
