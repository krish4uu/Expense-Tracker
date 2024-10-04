import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ExpenseForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch existing expense details for editing
      fetch(`http://localhost:5000/expenses/${id}`)
        .then(res => res.json())
        .then(data => {
          setName(data.name);
          setAmount(data.amount);
          setDate(data.date);
          setCategory(data.category);
        })
        .catch(err => console.error('Error fetching expense:', err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { name, amount, date, category };

    if (id) {
      // Edit existing expense
      fetch(`http://localhost:5000/expenses/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expense),
      })
        .then(() => navigate('/'))
        .catch(err => console.error('Error updating expense:', err));
    } else {
      // Add new expense
      fetch('http://localhost:5000/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expense),
      })
        .then(() => navigate('/'))
        .catch(err => console.error('Error adding expense:', err));
    }
  };

  const handleCancel = () => {
    // Navigate back to home page
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div>
        <label className="block text-gray-300">Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="bg-gray-700 text-white p-2 w-full border border-gray-600 rounded"
          required 
        />
      </div>
      <div>
        <label className="block text-gray-300">Amount</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          className="bg-gray-700 text-white p-2 w-full border border-gray-600 rounded"
          required 
        />
      </div>
      <div>
        <label className="block text-gray-300">Date</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className="bg-gray-700 text-white p-2 w-full border border-gray-600 rounded"
          required 
        />
      </div>
      <div>
        <label className="block text-gray-300">Category</label>
        <input 
          type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="bg-gray-700 text-white p-2 w-full border border-gray-600 rounded"
          required 
        />
      </div>
      <div className="flex justify-between space-x-4">
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Save</button>
        <button 
          type="button" 
          className="bg-red-600 text-white p-2 rounded w-full"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
