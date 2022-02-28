import Expense from "./Components/Expenses/Expense/Expense";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";

const App = () => {
  const expense = [{
    id: 1,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },{
    id: 2,
    title: "Rent",
    amount: 1095.00,
    date: new Date(2021, 3, 21)
  },{
    id: 3,
    title: "Credit Card",
    amount: 60.00,
    date: new Date(2021, 4, 27)
    
  },{
    id: 4,
    title: "Grocery",
    amount: 99.99,
    date: new Date(2021, 5, 22)
  }]
  return (
    <div>
      <NewExpense />
      <Expense items={expense} />
    </div>
  );
}

export default App;
