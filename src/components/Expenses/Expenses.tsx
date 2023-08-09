import React from 'react';

import './Expenses.css';
import { IExpenseItem } from '../../models/expense-item.interface';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import { Card } from '../Card/Card';

export const Expenses: React.FC<{ expenses: IExpenseItem[] }> = (props) => {

  return (
    <Card className="expenses">
      {
        props.expenses.map((expense) => (<ExpenseItem expense={expense}/>))
      }
    </Card>
  );
}
