import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from "./redux/state";

export let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App appState={ state } addPost={ addPost } updateNewPostText={ updateNewPostText } addMessage={ addMessage } updateNewMessageText={ updateNewMessageText } />
  </React.StrictMode>,
  document.getElementById('root')
);
}
