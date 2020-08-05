import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Home from '../Home';
import MoviesList from "../Movies/MoviesList"
import Categories from "../Categories"
import MovieTemplates from "../Movies/MovieTemplates"
import ImageEditor from "../Editor/ImageEditor"

const HomeStack = createStackNavigator()

export function HomeStackScreen(){
    return (
        <HomeStack.Navigator initialRouteName="Categories" >
            <HomeStack.Screen name="Categories" component={Categories} />
            <HomeStack.Screen name="MoviesList" component={MoviesList} /> 
            <HomeStack.Screen name="MovieTemplates" component={MovieTemplates} /> 
            <HomeStack.Screen name="ImageEditor" component={ImageEditor} /> 
        </HomeStack.Navigator>
    )
}

