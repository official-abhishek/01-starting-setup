import ExpenseItem from "./components/ExpenseItem";
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
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      

      <p>This is also Visible</p>
    </div>
  );
}

export default App;
