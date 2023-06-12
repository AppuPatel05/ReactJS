import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.expenseItemDate.toLocaleString("en-us", {
    month: "long",
  });
  const day = props.expenseItemDate.toLocaleString("en-us", {
    day: "2-digit",
  });
  const year = props.expenseItemDate.getFullYear();


  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
