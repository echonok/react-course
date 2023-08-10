import React, { useState } from 'react';

import './Expenses.css';
import { IExpenseItem } from '../../models/expense-item.interface';
import { ExpenseItem } from './ExpenseItem/ExpenseItem';
import { Card } from '../UI/Card/Card';
import { ExpensesFilter } from './ExpensesFilter/ExpensesFilter';

export const Expenses: React.FC<{ expenses: IExpenseItem[] }> = (props) => {

  const [year, setYear] = useState('');

  const changeYearFilter = (year: string) => {
    console.log('Selected component', year);
    setYear(() => year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter changeFilter={changeYearFilter}/>
        <p>Data is hidden</p>
        {
          props.expenses.map((expense) => (<ExpenseItem expense={expense}/>))
        }
      </Card>
    </div>
  );
}
