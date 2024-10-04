import ExpenseForm from '../components/ExpenseForm';

const AddEditExpense = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-8">Add/Edit Expense</h1>
      <ExpenseForm />
    </div>
  );
};

export default AddEditExpense;
