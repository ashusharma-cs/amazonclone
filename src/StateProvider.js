// setup the data layer
// We need this to track the basket

import { createContext, useContext, useReducer } from "react";

// this is the data layer
export const StateContext = createContext();


// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}

    </StateContext.Provider>
)


export const useStateValue = () => useContext(StateContext);