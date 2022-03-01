import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expense.css";
const Expense = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2022");
  const filterChangeHandler = (selectedFilter) => {
    setSelectedFilterYear(selectedFilter);
  };

  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  let expenseList = <p>No Expense found.</p>;
  if (filterExpense.length > 0) {
   expenseList = filterExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilterYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseList}
      </Card>
    </div>
  );
};

export default Expense;
