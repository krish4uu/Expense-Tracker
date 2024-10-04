import { Link } from "react-router-dom";

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <div className="border rounded p-3 sm:p-6 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{expense.name}</h3>
        <p className="flex gap-1 items-center text-sm sm:text-lg">
          <em className="text-xs sm:text-sm text-gray-300">Category:</em>
          {expense.category}
        </p>
        <p className="flex gap-1 items-center text-sm sm:text-lg">
          <em className="text-xs sm:text-sm text-gray-300">Date:</em>
          {expense.date}
        </p>
        <p className="flex gap-1 items-center text-sm sm:text-lg">
          <em className="text-xs sm:text-sm text-gray-300">Amount:</em>${expense.amount}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <button className="bg-green-500 text-white p-1 sm:p-2 rounded text-sm sm:text-md w-full">
          <Link to={`/edit/${expense.id}`}>Edit</Link>
        </button>
        <button
          onClick={() => onDelete(expense.id)}
          className="bg-red-500 text-white p-1 sm:p-2 rounded text-sm sm:text-md w-full"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
