import React from 'react'
import { View, Text } from 'react-native'
import SearchBar from "../services/Search/components/SearchBar"
import Categories from "../services/Search/components/Categories"
import CategoryHandler from "../services/Search/components/CategoryHandler"
import  MemeTemplates from "../services/Search/components/MemeTemplates";

export default function SearchScreen() {
  // 
  return (
    <View>
      <View>
        <SearchBar />
      </View>
      <View>
        <Categories />
      </View>
      <View>
        <CategoryHandler />
      </View>
      <View>
        <MemeTemplates/>
      </View>
    </View>
  )
}
