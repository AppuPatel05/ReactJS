
import Expenses from "./components/Expenses/Expenses";

const App =()=> {
  const expenseItemArray = [
    {title: "Car Insurance", price : "190$", date: new Date()},
    {title: "Bike Insurance", price : "100$", date: new Date()},
    {title: "Mobile Rechage", price : "300$", date: new Date()}
  ]

  return (
    <div className="App">
    <h2>
      Expense Items: 
    </h2>
    <Expenses expenseItemArray={expenseItemArray}></Expenses>
    </div>
  );
}

export default App;
