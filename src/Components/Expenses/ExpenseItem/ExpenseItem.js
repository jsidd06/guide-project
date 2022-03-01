import React, { useState } from 'react'
import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import "./ExpenseItem.css"
const  ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    console.log(title);
    setTitle("updated");
  }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem