const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATE':
      // console.log(action.payload);
      return {...state, ...action.payload};

    default:
      return state;
  }
};

export default reducer;
