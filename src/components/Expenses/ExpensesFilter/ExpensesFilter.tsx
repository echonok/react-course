import React from 'react';

import './ExpensesFilter.css';

export const ExpensesFilter: React.FC<{ changeFilter: (year: string) => void }> = (props) => {
  const changeFilterHandler = (event: React.BaseSyntheticEvent) => {
    console.log({ event: event.target.value });
    props.changeFilter(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeFilterHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};
