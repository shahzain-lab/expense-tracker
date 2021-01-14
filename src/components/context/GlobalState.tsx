import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import { stateTypes } from '../../interface/types.interface';

export interface state{
 firstState: stateTypes[];
}
const initialState: state = {
    firstState:[
        {id: 1, description: "salary", amount: 34},
        {id: 2, description: "salanty", amount: 65},
        {id: 3, description: "bread", amount: 32},
        {id: 4, description: "cake", amount: 24},
    ]
}
export const GlobalState = createContext(initialState);

export const GlobalProvider = ({children}: any) => {
    const [ state,dispatch ] = useReducer(AppReducer, initialState)as any;

    return(
        <GlobalState.Provider value={
            {firstState: state.firstState}
        }>
          {children}
        </GlobalState.Provider>
    )
}