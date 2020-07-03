import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (event) => {
    props.updateNewMessageText(event.target.value);
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
              value={state.newMessageText}
            />
          </div>
          <div>
            <button onClick={onSendMessage}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
