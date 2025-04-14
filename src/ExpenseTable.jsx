export const ExpenseTable = ({ expenses, onDelete }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Category</th>
            <th>description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>ksh{expense.amount}</td>
              <td>{expense.date}</td>
              <td>{expense.time}</td>
              <td>
                <button 
                  onClick={() => onDelete(expense.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };