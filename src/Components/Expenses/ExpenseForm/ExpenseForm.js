import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    const [enterTitle,setEnterTitle] = useState('');
    const [enterAmount,setEnterAmount] = useState('');
    const [enterDate,setEnterDate] = useState('');

    const enterTitleChangeHandler = (event) => {
        setEnterTitle(event.target.value);
    }
    const enterAmountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
    }
    const enterDateChangeHandler = (event) => {
        setEnterDate(event.target.value);
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={enterTitleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={enterAmountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" step="2025-12-31" onChange={enterDateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm