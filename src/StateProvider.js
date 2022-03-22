import React, { createContext, useContext, useReducer } from 'react'

//prepares the data layer
export const StateContext = createContext();
//wraps the app and proveds data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//pulls info from data layer
export const useStateValue = () => useContext(StateContext);


