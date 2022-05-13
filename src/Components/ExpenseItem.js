import React from 'react';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <div>
      <ExpenseDate date = {props.date} />
      <div>{props.title}</div>
      <div>${props.amount}</div>
    </div>
  );
}
export default ExpenseItem;

