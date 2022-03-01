import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import "./Expense.css";
const Expense = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2022");
  const filterChangeHandler = (selectedFilter) => {
    setSelectedFilterYear(selectedFilter);
  };

  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filterExpense} />
      </Card>
    </div>
  );
};

export default Expense;
