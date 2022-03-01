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
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilterYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
