const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
      ],
      newPostText: "123",
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
      newMessageText: "123",
    },
    sidebar: {
      friendsData: [{ name: "Vita" }, { name: "Sasha" }, { name: "Oleh" }],
    },
  },
  _callSubscriber() {
    console.log("State is changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {
  //   let newPost = {
  //     id: 3,
  //     message: this._state.profilePage.newPostText,
  //     likes: 0
  //   };

  //   this._state.profilePage.postsData.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  // addMessage(message) {
  //   let newMessage = {
  //     id: this._state.dialogsPage.messagesData.length + 1,
  //     message: message
  //   };

  //   this._state.dialogsPage.messagesData.push(newMessage);
  //   this._state.dialogsPage.newMessageText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewMessageText(newMessageText) {
  //   this._state.dialogsPage.newMessageText = newMessageText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };

      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: this._state.dialogsPage.messagesData.length + 1,
        message: action.message,
      };

      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const addMessageActionCreator = (message) => ({
  type: ADD_MESSAGE,
  message: message
});
export const updateNewMessageActionCreator = (newMessageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: newMessageText
});

export default store;
