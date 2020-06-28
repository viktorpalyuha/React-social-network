import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.state.messagesData.map( (message) => <Message message={message.message} />);

    let addMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch( addMessageActionCreator(addMessageElement.current.value) );
    }

    let onMessageChange = () => {
        props.dispatch( updateNewMessageActionCreator(addMessageElement.current.value) );
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
                <textarea onChange={ onMessageChange } ref={addMessageElement} value= { props.state.newMessageText }/>
                <button onClick={addMessage}>SEND</button>
            </div>
        </div>
    );
}

export default Dialogs;