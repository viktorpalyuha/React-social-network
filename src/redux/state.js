let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hi, how are you?", likes: 15 },
      { id: 2, message: "It's my first post", likes: 20 },
    ],
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
  },
  sidebar: {
    friendsData: [
      { name: "Vita" },
      { name: "Sasha" },
      { name: "Oleh" }
    ]
  }
};

export default state;
