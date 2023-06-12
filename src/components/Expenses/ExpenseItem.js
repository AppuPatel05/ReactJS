import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title,setTitle] = useState(props.expenseItems.title);

    
  const changeTitle = () => {
    console.log("Title changed...!");
    setTitle("TitleChanged..");      
  }

  return (
    <div>
      <div className="expense-item">
        <ExpenseDate expenseItemDate = {props.expenseItems.date}></ExpenseDate>
        {/* <div className="expense-item">{props.expenseItem.date.toISOString()}</div> */}
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.expenseItems.price}</div>
        </div>
        <button onClick={changeTitle}>clickMe</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
