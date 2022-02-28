import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";

function App() {
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
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;
