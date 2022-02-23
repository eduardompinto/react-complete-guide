import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((ex) => (
        <ExpenseItem
          locale="pt-Br"
          title={ex.title}
          date={ex.date}
          amount={ex.amount}
          key={ex.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
