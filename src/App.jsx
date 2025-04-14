import { useState } from 'react';
import './index.css';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseTable } from './ExpenseTable';
import { SearchBar } from './SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "eggs",
      category: "shopping",
      description: "buy protein",
      amount: 2000,
      date: "2025-6-10",
      time: "14:30"
    },
    {
      id: 2,
      name: "car wash",
      category: "cleaning",
      description: "clean car exterior and interior",
      amount: 300,
      date: "2025-6-12",
      time: "09:15"
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      
      <SearchBar 
        searchTerm={searchTerm} 
        onSearch={setSearchTerm} 
      />
      
      <ExpenseForm onSubmit={handleAddExpense} />
      
      <ExpenseTable 
        expenses={filteredExpenses} 
        onDelete={deleteExpense} 
      />
    </div>
  );
}

export default App;