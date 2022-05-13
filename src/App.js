import React from 'react';
import './style.css';
import ExpenseItem from './Components/ExpenseItem';
import Test from './Components/test';

function App() {
  const Expense = [
    {
      title: 'Car Expense',
      amount: 250,
      date: new Date(2001, 5, 15),
    },
    {
      title: 'Paper Expense',
      amount: 50,
      date: new Date(2020, 2, 13),
    },
    {
      title: 'System Expense',
      amount: 700,
      date: new Date(2018, 3, 21),
    },
  ];
  return (

    <div>
      <Test></Test>
      <ExpenseItem title={Expense[0].title} amount={Expense[0].amount} date={Expense[0].date}></ExpenseItem>
      <Test></Test>
      <ExpenseItem title={Expense[1].title} amount={Expense[1].amount} date={Expense[1].date}></ExpenseItem>
      <Test></Test>
      <ExpenseItem title={Expense[2].title} amount={Expense[2].amount} date={Expense[2].date}></ExpenseItem>
    </div>
  );
}
export default App;
