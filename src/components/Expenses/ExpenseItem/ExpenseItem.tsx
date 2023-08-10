import React from 'react';

import './ExpenseItem.css';
import { IExpenseItem } from '../../../models/expense-item.interface';
import { ExpenseDate } from '../ExpenseDate/ExpenseDate';
import { Card } from '../../UI/Card/Card';

export const ExpenseItem: React.FC<{ expense: IExpenseItem }> = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date}/>
        <h2 className="expense-item__description">{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </Card>
    </li>
  );
};
