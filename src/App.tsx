import React, { useState } from 'react';

import { IExpenseItem } from './models/expense-item.interface';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';

const initialExpenses: IExpenseItem[] = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export const App: React.FC = () => {

  const [expenses, setExpenses] = useState(initialExpenses);

  const saveExpenseHandler = (expense: IExpenseItem) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div>
      <NewExpense saveExpense={saveExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}
