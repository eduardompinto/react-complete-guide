import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const items = props.items;
  const [filteredItems, setFilteredItems] = useState(props.items);

  const selectYearHandler = (selectedYear) =>
    setFilteredItems(
      items.filter(
        (item) => item.date.getFullYear().toString() === selectedYear
      )
    );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectYear={selectYearHandler} />
        {filteredItems.map((expense) => (
          <ExpenseItem
            locale="pt-Br"
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={expense.id}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
