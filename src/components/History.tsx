import React from 'react'
import './style.css'

export const History = () => {
    return (
        <div className="History"> 
           <h3 className="histHead">Transction History</h3> 
           <ul>
               <li>
                   <h4>Salary</h4>
                   <span>10,000</span>
                   <i className="fas fa-trash-alt"></i>
               </li>
               <li>
                   <h4>Salary</h4>
                   <span>10,000</span>
                   <i className="fas fa-trash-alt"></i>
               </li>
               <li>
                   <h4>Salary</h4>
                   <span>10,000</span>
                   <i className="fas fa-trash-alt"></i>
               </li>
               <li>
                   <h4>Salary</h4>
                   <span>10,000</span>
                   <i className="fas fa-trash-alt"></i>
               </li>
               <li>
                   <h4>Salary</h4>
                   <span>10,000</span>
                   <i className="fas fa-trash-alt"></i>
               </li>
           </ul>
        </div>
    )
}
