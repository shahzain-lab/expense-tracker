import React from 'react'
import './style.css'

export const AddTrans = () => {
    return (
        <div className="AddTrans">
            <h3 className="Addhead">Add Transction</h3>
            <form>
                <label>Add Amount</label>
                <br />
                <input 
                 type="number"
                 placeholder="Add Transction amount"
                />
                <br />
                <label>Add Description</label>
                <br />
                <input 
                 type="text"
                 placeholder="Add Amount Description"
                />
                <br />
                <input 
                  type="submit" 
                  value="submit"
                />
            </form>
        </div>
    )
}
