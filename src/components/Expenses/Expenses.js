import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const items = props.items;
  const [filteredYear, setFilteredYear] = useState("2019");

  const selectYearHandler = (selectedYear) => setFilteredYear(selectedYear);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={selectYearHandler}
          selectedYear={filteredYear}
        />
        {items.filter(ex => (filteredYear === '' || ex.date.getFullYear().toString() === filteredYear)).map((ex) => (
          <ExpenseItem
            locale="pt-Br"
            title={ex.title}
            date={ex.date}
            amount={ex.amount}
            key={ex.id}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
