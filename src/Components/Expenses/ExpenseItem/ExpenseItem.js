import React from 'react'
import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import "./ExpenseItem.css"
const  ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clicked");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem