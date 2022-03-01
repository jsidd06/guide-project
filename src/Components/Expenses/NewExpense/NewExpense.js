import React, { useState } from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import "./NewExpense.css"
const NewExpense = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const saveExpenseData = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id : Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEdit(false);
  }
  const startEditHandler = (event) => {
    event.preventDefault();
    setIsEdit(true);
  }
  const stopEditHandler = () => {
    setIsEdit(false);
  }
  return (
    <div className="new-expense">
      {!isEdit && <button onClick={startEditHandler}>Add New Expense</button>}
      {isEdit && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditHandler} />}
    </div>
  );
}

export default NewExpense