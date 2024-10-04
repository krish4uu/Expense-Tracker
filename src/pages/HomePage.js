import ExpenseList from "../components/ExpenseList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <section className="flex justify-between mt-6 gap-1 ">
        <h1 className="flex text-lg sm:text-3xl font-bold text-center">Expense Tracker</h1>
        <Link
          to="/add"
          className="flex bg-blue-500 text-white p-1 sm:p-2 rounded mb-4 text-sm sm:text-md"
        >
          Add Expense
        </Link>
      </section>
      <ExpenseList />
    </div>
  );
};

export default HomePage;
