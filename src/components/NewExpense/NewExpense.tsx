import React from 'react';
import { v4 as uuid4 } from 'uuid';

import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm/ExpenseForm';
import { IExpenseItem } from '../../models/expense-item.interface';

export const NewExpense: React.FC<{ saveExpense: (expenseData: IExpenseItem) => void }> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseItem) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid4(),
    };
    props.saveExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};
