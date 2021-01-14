import React from 'react'
import './style.css'

export const Summary = () => {
    return (
        <div className="Summary">
            <div className="sum1">
            <i className="fas fa-chart-line"></i>
            <h4>Income</h4>
            <span>00,00</span>
            </div>
            <div className="sum2">
            <i className="fas fa-sort-amount-down-alt"></i>
            <h4>expense</h4>
            <span>00,00</span>
            </div>
        </div>
    )
}
