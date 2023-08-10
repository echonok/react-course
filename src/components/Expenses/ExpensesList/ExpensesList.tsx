import React from 'react';

import './ExpensesList.css';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import { IExpenseItem } from '../../../models/expense-item.interface';

export const ExpensesList: React.FC<{ expenses: IExpenseItem[] }> = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">no expenses</h2>
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (<ExpenseItem expense={expense} key={expense.id}/>))}
    </ul>
  )
}
