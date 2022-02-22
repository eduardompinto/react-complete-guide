import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [updateCount, setUpdateCount] = useState(0);
  const clickHandler = () => setUpdateCount(updateCount + 1);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} locale={props.locale} />
      <div className="expense-item__description">
        <h2>
          {updateCount > 0
            ? `${props.title} update ${updateCount} times`
            : props.title}
        </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
