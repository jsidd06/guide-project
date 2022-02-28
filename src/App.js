import Expense from "./Components/Expense/Expense";
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
      <Expense items={expense} />
    </div>
  );
}

export default App;
