import { rerenderEntireTree } from "../render";

let state = {

  profilePage: {
    postsData: [
      { id: 1, message: "Hi, how are you?", likes: 15 },
      { id: 2, message: "It's my first post", likes: 20 },
    ],
    newPostText: "123"
  },
  dialogsPage: {
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
    newMessageText: "123"
  },
  sidebar: {
    friendsData: [
      { name: "Vita" },
      { name: "Sasha" },
      { name: "Oleh" }
    ]
  }
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likes: 0
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addMessage = (message) => {
  let newMessage = {
    id: state.dialogsPage.messagesData.length + 1,
    message: message
  };

  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessageText) => {
  state.dialogsPage.newMessageText = newMessageText;
  rerenderEntireTree(state);
}

export default state;
