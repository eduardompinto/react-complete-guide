import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'


function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          locale="pt-Br"
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
        />
      ))}
    </Card>
  );
}

export default Expenses;
