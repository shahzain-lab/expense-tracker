import React from 'react'
import { stateTypes } from '../interface/types.interface'
import { FC } from 'react';
import './style.css'

interface Props{
    transaction: stateTypes
}

export const Transction: FC<Props> = ({transaction}) => {
    
    return (
        <div>
            <li className="Transction">
                {transaction.description}
    <span>{transaction.amount}</span>
    <i className="fas fa-trash-alt"></i>
            </li>
        </div>
    )
}
