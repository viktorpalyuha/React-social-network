import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
      ],
      newPostText: "",
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
      newMessageText: "",
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

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
