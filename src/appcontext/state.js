export default {
  authentication: {
    isLoggedIn: false
  },
  search: {
    searchQuery: ""
  },
  editor: {
    imageURL: '',
    base64Image: ``,
    selectedImage: {
      imageURL: "",
      title: "",
      extension: ""
    },
    editingDetails: {
      content: [
        {
          text: "Top",
          fontSize: "",
          fontColor: "black",
          backgroundColor: "white",
          position: {
            x: 0,
            y: 0
          }
        }
      ],
      editingText: "",
      selectedContentIndex: 0,
      isEditing: false
    }
  }
};
