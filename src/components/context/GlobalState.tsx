import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import { stateTypes } from '../../interface/types.interface';

export interface state{
 firstState: stateTypes[];
 delTransaction?: (id: unknown) => void
 AddTransaction?: (transaction: unknown) => void
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

    const  delTransaction =(id: unknown)=> {
        dispatch({
         type: "DELETE_TRANSACTION",
          payload: id
    })
    }
    function AddTransaction(tranasction:unknown){
        dispatch({type: "ADD_TRANSACTION",
        payload: tranasction
    })
    }
    return(
        <GlobalState.Provider value={
            {
                firstState: state.firstState,
                delTransaction,
                AddTransaction,
            }
        }>
          {children}
        </GlobalState.Provider>
    )
}