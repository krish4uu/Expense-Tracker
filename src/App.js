import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEditExpense from './pages/AddEditExpense';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="container max-w-screen-md  mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddEditExpense />} />
            <Route path="/edit/:id" element={<AddEditExpense />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
