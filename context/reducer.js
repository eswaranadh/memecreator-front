import React, { createContext, useReducer } from "react"
import { SET_MOVIES_LIST, SET_MOVIE_TEMPLATES } from "./types"
export const DataContext = createContext()

const initialState = {
    appBackground: "#121212",
    bottomBackground: "#282828",
    headerBackground: "#282828"
}

const reducer = (state, action) => {
    switch(action.type){
        case SET_MOVIES_LIST: return {
            ...state,
            movies_list: action.payload.movies_list
        }
    }
}

function DataContextProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <DataContext.Provider value={[state, dispatch]} >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider