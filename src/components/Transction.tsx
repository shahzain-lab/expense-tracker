import React from 'react'
import { stateTypes } from '../interface/types.interface'
import { FC } from 'react';
import './style.css'

interface Props{
    transaction: stateTypes
}

export const Transction: FC<Props> = ({transaction}) => {
    const sign = transaction.amount > 0 ? '+' : '-';
    const TransTypes = transaction.amount > 0 ? 'plus' : 'minus';
    return (
        <div>
            <li className="Transction">
                {transaction.description}
    <span>{sign} ${Math.abs(transaction.amount)}</span>
    <i className="fas fa-trash-alt"></i>
            </li>
        </div>
    )
}
