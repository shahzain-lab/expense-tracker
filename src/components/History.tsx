import React from 'react'
import './style.css';
import { useContext } from 'react';
import { GlobalState } from './context/GlobalState';
import { Transction } from './Transction';


export const History = () => {
    const { firstState } = useContext(GlobalState);
    console.log(firstState)
    return (
        <div className="History"> 
           <h3 className="histHead">Transction History</h3> 
           <ul>
              {firstState.map(transaction => (
                  <Transction key={transaction.id} transaction={transaction}/>
              ))}
           </ul>
        </div>
    )
}
