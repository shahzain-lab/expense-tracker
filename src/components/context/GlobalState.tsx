import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import { stateTypes } from '../../interface/types.interface';

export interface state{
 firstState: stateTypes[];
 delTransaction?: (id: unknown) => void
 AddTransaction?: (transaction: unknown) => void
}
const initialState: state = {
    firstState:[]
}
export const GlobalState = createContext(initialState);

export const GlobalProvider = ({children}: any) => {
    const [ state,dispatch ] = useReducer(AppReducer, initialState)as any;

    function delTransaction (id: unknown) {
        dispatch({
         type: "DELETE_TRANSACTION",
          payload: id
    })
    }
    function AddTransaction(tranasction: unknown){
        dispatch({
        type: "ADD_TRANSACTION",
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