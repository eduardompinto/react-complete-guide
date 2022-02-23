import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const selectYearHandler = (selectedYear) => setFilteredYear(selectedYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={selectYearHandler}
          selectedYear={filteredYear}
        />
        <ExpensesList
          items={props.items.filter(ex => filteredYear === "" || ex.date.getFullYear().toString() === filteredYear)}
        />
      </Card>
    </div>
  );
};

export default Expenses;
