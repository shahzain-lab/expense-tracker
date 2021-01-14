import React, { useContext } from 'react'
import './style.css';
import { GlobalState } from './context/GlobalState';

export const Balance = () => {

const  { firstState } = useContext(GlobalState);
const transctionAmount = firstState.map(transaction => transaction.amount);
const balance = transctionAmount
.reduce((acc, transaction) => (acc += transaction),0)
.toFixed(2);

    return (
        <div className="Balance">
            <h4><i className="fas fa-balance-scale"></i>Balance <br /><span>{balance}</span></h4>
        </div>
    )
}
