import { state } from "./GlobalState";


export default function AppReducer(
    state: state
    ,action: any
    ){
   switch(action.type){
       case 'DELETE_TRANSACTION':
           return{
               ...state,
               firstState: state.firstState
               .filter(transaction => transaction !== action.payload) 
           }
       default:
           return state
   }
} 