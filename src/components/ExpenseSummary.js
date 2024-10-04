import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);

  const categorizedExpenses = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + Number(expense.amount);
    return acc;
  }, {});

  return (
    <div className="bg-gray-800 p-3 sm:p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-lg font-semibold text-white">Summary</h2>
      <p className="text-md sm:text-lg text-gray-300">Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <h3 className="text-lg text-white mt-4">Categorized Expenses:</h3>
      <ul className="text-gray-400 text-md sm:text-lg">
        {Object.entries(categorizedExpenses).map(([category, amount]) => (
          <li key={category}>
            {category}: ${amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
