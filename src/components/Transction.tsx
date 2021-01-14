import React from 'react'
import { stateTypes } from '../interface/types.interface'
import { FC } from 'react';
import './style.css'
import { useContext } from 'react';
import { GlobalState } from './context/GlobalState';

interface Props{
    transaction: stateTypes
}

export const Transction: FC<Props> = ({transaction}) => {
    const sign = transaction.amount > 0 ? '+' : '-';
    const TransTypes = transaction.amount > 0 ? 'plus' : 'minus';
    
    const { delTransaction }: any = useContext(GlobalState)
    

    return (
        <div className={TransTypes}>
            <li className="Transction">
                {transaction.description}
    <span>{sign} ${Math.abs(transaction.amount)}</span>
    <i className="fas fa-trash-alt" onClick={() => delTransaction(transaction.id)}></i>
            </li>
        </div>
    )
}
