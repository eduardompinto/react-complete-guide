import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const selectYearHandler = (selectedYear) => setFilteredYear(selectedYear);
  const filteredExpenses = props.items.filter(
    (ex) =>
      filteredYear === "" || ex.date.getFullYear().toString() === filteredYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={selectYearHandler}
          selectedYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
