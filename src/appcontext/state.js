export default {
  authentication: {
    isLoggedIn: false,
  },
  search: {
    searchQuery: '',
  },
  editor: {
    imageURL: '',
    base64Image: ``,
    selectedImage: {
      imageURL: '',
      title: '',
      extension: '',
    },
    editingDetails: {
      content: [
        {
          text: 'Top',
          textShadowRadius: 1,
          fontSize: 10,
          fontColor: 'black',
          backgroundColor: 'white',
          width: 50,
          position: {
            x: 0,
            y: 0,
          },
        },
      ],
      editingText: '',
      selectedContentIndex: null,
      isEditing: false,
      isTransparent: false,
    },
  },
};
