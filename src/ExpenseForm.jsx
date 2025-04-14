import { useState } from 'react';

export const ExpenseForm = ({ onSubmit }) => {
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
    onSubmit({ ...formData, id: Date.now(), amount: +formData.amount });
    setFormData({
      name: '',
      category: '',
      description: '',
      amount: '',
      date: '',
      time: ''
    });
  };

  return (
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
  );
};