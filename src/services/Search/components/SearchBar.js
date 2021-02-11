import React, { useContext } from 'react'
import { Searchbar } from 'react-native-paper';
import { Context } from "../../../appcontext/context"
import {
  View
} from 'react-native';
import SearchBarStyles from '../styles/SearchBarStyles';

function SearchBar() {
  const [state, dispatch] = useContext(Context);
  const searchState = state.search
  const setState = (obj) => {
    dispatch({
      type: 'SET_SEARCH_STATE',
      payload: obj,
    });
  };


  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => setState({ searchQuery: query })}
        value={searchState.searchQuery}
        style={SearchBarStyles.bar}
      />
    </View>
  );
}

export default SearchBar;