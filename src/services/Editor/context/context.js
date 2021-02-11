import React, {useReducer} from 'react';
import reducer from './reducer';
import initialState from './state';
const Context = React.createContext();

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('context', state);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};

export {Context, ContextProvider};
