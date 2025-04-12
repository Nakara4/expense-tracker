import { useState } from 'react';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    amount: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { ...formData, id: Date.now(), amount: +formData.amount }]);
    setFormData({
      name: '',
      category: '',
      description: '',
      amount: '',
      date: '',
      time: ''
    });
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
     
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            name="description"
            placeholder="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.name}</td>
              <td>${expense.amount}</td>
              <td>{expense.date}</td>
              <td>{expense.time}</td>
              <td>
                <button 
                  onClick={() => deleteExpense(expense.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  );
}

export default App;