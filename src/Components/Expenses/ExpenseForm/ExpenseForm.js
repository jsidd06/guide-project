import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    const [enterTitle,setEnterTitle] = useState('');
    const [enterAmount,setEnterAmount] = useState('');
    const [enterDate,setEnterDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // })

    const enterTitleChangeHandler = (event) => {
        setEnterTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterTitle: event.target.value
        // })
        // set userInput to the value of the input field in prevState
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enterTitle: event.target.value
        //     }
        // })
    }
    const enterAmountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterAmount: event.target.value
        // })
    }
    const enterDateChangeHandler = (event) => {
        setEnterDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
          title: enterTitle,
          amount: enterAmount,
          date: new Date(enterDate),
        };
        console.log(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={enterTitleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enterAmount} min="0.01" step="0.01" onChange={enterAmountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enterDate} min="2022-01-01" step="2025-12-31" onChange={enterDateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm