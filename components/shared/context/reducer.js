import React, { createContext, useReducer } from "react"

export const DataContext = createContext()

const initialState = {}

const reducer = (state, action) => {
    switch(action.type){

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