import { useState } from 'react';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    name: '',
    amount: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { ...formData, id: Date.now(), amount: +formData.amount }]);
    setFormData({
      description: '',
      category: '',
      name: '',
      amount: '',
      date: '',
      time: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }; 
  
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
     
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            name="description"
            placeholder="Description"
            value={formData.description}
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
            name="name"
            placeholder="Name"
            value={formData.name}
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

    </div>

  );
}

export default App;