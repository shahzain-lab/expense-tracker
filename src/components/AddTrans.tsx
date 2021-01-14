import React from 'react'
import './style.css'
import { useState } from 'react'

export const AddTrans = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('0');

    return (
        <div className="AddTrans">
            <h3 className="Addhead">Add Transction</h3>
            <form>
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
