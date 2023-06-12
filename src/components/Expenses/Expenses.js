import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) =>{
  return (
    <Card>
      {props.expenseItemArray.map((expenseItem, index) => (
        <Card>
        <ExpenseItem key={index} expenseItems={expenseItem} />
        </Card>
      ))}
    </Card>
  );
}

export default Expenses;
