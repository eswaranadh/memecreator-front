import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
<<<<<<< Updated upstream
// import Home from '../Home';
=======
>>>>>>> Stashed changes
import MoviesList from "../Movies/MoviesList"
import Categories from "../Categories"
import MovieTemplates from "../Movies/MovieTemplates"
import ImageEditor from "../Editor/ImageEditor"
import AfterEdit from "../Editor/AfterEdit"

const HomeStack = createStackNavigator()

export function HomeStackScreen(){
    return (
        <HomeStack.Navigator initialRouteName="Categories" >
            <HomeStack.Screen name="Categories" component={Categories} />
            <HomeStack.Screen name="MoviesList" component={MoviesList} /> 
            <HomeStack.Screen name="MovieTemplates" component={MovieTemplates} /> 
            <HomeStack.Screen name="ImageEditor" component={ImageEditor} /> 
            <HomeStack.Screen name="AfterEdit" component={AfterEdit}/>
        </HomeStack.Navigator>
    )
}

