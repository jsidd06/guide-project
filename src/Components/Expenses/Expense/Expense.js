import React, { useState } from 'react'
import Card from '../../UI/Card/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import "./Expense.css"
const Expense = (props) => {
  const [selectedFilterYear,setSelectedFilterYear] = useState("2022");
  const filterChangeHandler = selectedFilter => {
   setSelectedFilterYear(selectedFilter);
  }
  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selected={selectedFilterYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expense