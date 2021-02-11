const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_AUTH_STATE':
      return {
        ...state,
        authentication: {
          ...state.authentication,
          ...action.payload
        }
      }

    case 'SET_SEARCH_STATE':
      return {
        ...state,
        search: {
          ...state.search,
          ...action.payload
        }
      };

    case 'SET_EDITOR_STATE':
      return {
        ...state,
        editor: {
          ...state.editor,
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default reducer;
