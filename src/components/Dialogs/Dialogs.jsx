import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let addMessage = () => {
    props.dispatch( addMessageActionCreator() );
  };

  let onMessageChange = (event) => {
    props.dispatch(
      updateNewMessageActionCreator(event.target.value)
    );
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onMessageChange}
              placeholder="Enter your message"
              value={props.state.newMessageText}
            />
          </div>
          <div>
            <button onClick={addMessage}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
