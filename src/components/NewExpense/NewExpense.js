import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    props.onNewExpense({
      ...expenseData,
      id: Math.random().toString(),
    });
  };
  const editingHandler = () => setIsEditing((prev) => !prev);

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={editingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
