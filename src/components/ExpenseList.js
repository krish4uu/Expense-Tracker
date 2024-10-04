import { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/expenses/${id}`, { method: "DELETE" }).then(
      () => setExpenses(expenses.filter((exp) => exp.id !== id))
    );
  };

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={handleDelete}
        />
      ))}
      <ExpenseSummary expenses={expenses} />
    </div>
  );
};

export default ExpenseList;
