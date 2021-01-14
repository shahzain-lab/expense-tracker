import React from 'react'
import './style.css';
import { useContext } from 'react';
import { GlobalState } from './context/GlobalState';


export const Summary = () => {
       const { firstState } = useContext(GlobalState);
       
       const TransactionAmount = firstState.map(transction => transction.amount);

       const income = TransactionAmount
       .filter(transaction => transaction > 0)
       .reduce((acc, transaction) => (acc += transaction),0)
       .toFixed(2);

       const expense = TransactionAmount
       .filter(transaction => transaction < 0)
       .reduce((acc, transaction) => (acc += transaction), 0)
       .toFixed(2)
     return (
        <div className="Summary">
            <div className="sum1">
            <i className="fas fa-chart-line"></i>
            {/* <h4>Income</h4> */}<br />
            <span>{income}</span>
            </div>
            <div className="sum2">
            <i className="fas fa-sort-amount-down-alt"></i>
            {/* <h4>expense</h4> */}<br />
            <span>{expense}</span>
            </div>
        </div>
    )
}
