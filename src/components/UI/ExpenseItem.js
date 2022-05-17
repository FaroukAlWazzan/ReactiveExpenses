import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../Expenses/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
   console.log('ExpenseItem evaluated by React');

   return (
      <Card className='expense-item'>
         <ExpenseDate date={props.date} />
         <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
         </div>
      </Card>);
}

export default ExpenseItem; 