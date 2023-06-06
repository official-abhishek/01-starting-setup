import ExpenseItemList from "./components/ExpenseItemList";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      eid: 1,
      title: "Car Insuarance",
      amount: 264,
      date: new Date(2021, 5, 12),
    },
    {
      eid: 2,
      title: "Health Insuarance",
      amount: 300.3,
      date: new Date(2021, 5, 12),
    },
    {
      eid: 1,
      title: "Taxes",
      amount: 2640.34,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense />
        <ExpenseItemList expenses={expenses}  />
    </div>
  );
}

export default App;
