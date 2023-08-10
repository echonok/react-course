import React, { BaseSyntheticEvent, useState } from 'react';

import './ExpenseForm.css';
import { IExpenseItem } from '../../../models/expense-item.interface';
import dayjs from 'dayjs';

export const ExpenseForm: React.FC<{ onSaveExpenseData: (expenseData: IExpenseItem) => void }> = (props) => {
  const initState = {
    title: '',
    amount: 0,
    date: new Date(),
  };
  const [state, setState] = useState(initState);
  const titleChangeHandler = (event: BaseSyntheticEvent) => {
    setState((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const amountChangeHandler = (event: BaseSyntheticEvent) => {
    setState((prevState) => ({ ...prevState, amount: +event.target.value }));
  };

  const dateChangeHandler = (event: BaseSyntheticEvent) => {
    setState((prevState) => ({ ...prevState, date: new Date(event.target.value) }));
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    props.onSaveExpenseData(state);
    setState(() => initState);
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={state.title} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={state.amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={dayjs(state.date).format('YYYY-MM-DD')} min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};
