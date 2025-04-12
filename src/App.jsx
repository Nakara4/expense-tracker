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
     

    </div>

  );
}

export default App;