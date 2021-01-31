import React, { useContext } from 'react'
import { Searchbar } from 'react-native-paper';
import { ContextProvider, Context } from "../context/context"
import Wrapper from "../../../shared/GeneralComponents/Wrapper"
import {
  View
} from 'react-native';
import SearchBarStyles from '../styles/SearchBarStyles';

function SearchBar() {
  const [state, dispatch] = useContext(Context);
  const setState = (obj) => {
    dispatch({
      type: 'SET_STATE',
      payload: obj,
    });
  };



  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => setState({ searchQuery: query })}
        value={state.searchQuery}
        style={SearchBarStyles.bar}
      />
    </View>
  );
}

export default Wrapper(ContextProvider, SearchBar);