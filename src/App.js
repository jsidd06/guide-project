import { useState } from "react";
import Expense from "./Components/Expenses/Expense/Expense";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";


const DUMMY_EXPENSE = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 2,
    title: "Rent",
    amount: 1095.0,
    date: new Date(2022, 3, 21),
  },
  {
    id: 3,
    title: "Credit Card",
    amount: 60.0,
    date: new Date(2022, 4, 27),
  },
  {
    id: 4,
    title: "Grocery",
    amount: 99.99,
    date: new Date(2022, 5, 22),
  },
];


const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSE);
 const addExpenseHandler = (expense) => {
   setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
   });
 }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
