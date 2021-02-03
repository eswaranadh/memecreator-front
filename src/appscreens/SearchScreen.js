import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import SearchBar from "../services/Search/components/SearchBar"
import Categories from "../services/Search/components/Categories"
import CategoryHandler from "../services/Search/components/CategoryHandler"
import  MemeTemplates from "../services/Search/components/MemeTemplates";

export default function SearchScreen() {

  return (
    <View>
    <ScrollView>
       <View>
        <SearchBar />
      </View>
      <View>
        <CategoryHandler />
      </View>
      <View>
        <MemeTemplates type={"Trending"} />
      </View>
      <View>
        <MemeTemplates type={"Cartoon"}/>
      </View>
      <View>
      <MemeTemplates type={"Ali"}/>
      </View>
    </ScrollView>
    </View>
  )
}
