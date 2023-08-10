import React, { useState } from 'react';

import './Expenses.css';
import { IExpenseItem } from '../../models/expense-item.interface';
import { Card } from '../UI/Card/Card';
import { ExpensesFilter } from './ExpensesFilter/ExpensesFilter';
import { ExpensesList } from './ExpensesList/ExpensesList';
import { ExpensesChart } from './ExpensesChart/ExpensesChart';

export const Expenses: React.FC<{ expenses: IExpenseItem[] }> = (props) => {

  const initialState = {
    dateFilter: '',
    expenses: props.expenses,
  };

  const [expensesState, setExpensesState] = useState(initialState);

  const changeYearFilter = (year: string) => {
    setExpensesState((prevState) => {
      const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear() === +year)
      return { ...prevState, dateFilter: year, expenses: filteredExpenses };
    })
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedDate={expensesState.dateFilter} changeFilter={changeYearFilter}/>
        <ExpensesChart expenses={expensesState.expenses}/>
        <ExpensesList expenses={expensesState.expenses}/>
      </Card>
    </div>
  );
}
