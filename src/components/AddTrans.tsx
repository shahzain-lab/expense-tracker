import React from 'react'
import './style.css'
import { useState } from 'react'
import { useContext } from 'react';
import { GlobalState } from './context/GlobalState';

export const AddTrans = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const { AddTransaction }:any = useContext(GlobalState);

    const onSubmit = (e: any) => {
      e.preventDefault();
       
      const newTransaction = {
          id: new Date().getTime(),
          description,
          amount: +amount
      }
      AddTransaction(newTransaction)
    }

    return (
        <div className="AddTrans">
            <h3 className="Addhead">Add Transction</h3>
            <form onSubmit={onSubmit}>
                <label>Add Amount</label>
                <br />
                <input 
                value={amount}
                onChange={e => setAmount(e.target.value)}
                 type="number"
                 placeholder="Add Transction amount"
                />
                <br />
                <label>Add Description</label>
                <br />
                <textarea 
                 name="text"
                 value={description}
                 onChange={e => setDescription(e.target.value)}
                 placeholder="Add Amount Description"
                />
                <br />
                <button>Add Transction</button>
            </form>
        </div>
    )
}
