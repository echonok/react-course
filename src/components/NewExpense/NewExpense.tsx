import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm/ExpenseForm';
import { IExpenseItem } from '../../models/expense-item.interface';

export const NewExpense: React.FC<{ saveExpense: (expenseData: IExpenseItem) => void }> = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseItem) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid4(),
    };
    props.saveExpense(expenseData);
    hideFormHandler();
  }

  const showFormHandler = () => setShowForm(() => true);
  const hideFormHandler = () => setShowForm(() => false);

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add new expense</button>}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler}/>}
    </div>
  );
};
