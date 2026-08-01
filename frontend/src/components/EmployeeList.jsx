import { formatCurrency, formatDate } from "../utils/helpers";

function EmployeeList({ employees, onView, onEdit, onDelete, loading }) {
  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner" />
        <p>Loading employees...</p>
      </div>
    );
  }

  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">👥</div>
        <h3>No employees found</h3>
        <p>Add a new employee or adjust your search filters.</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Joined</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td className="name-cell">
                <div className="avatar">
                  {employee.firstName.charAt(0)}
                  {employee.lastName.charAt(0)}
                </div>
                <span>
                  {employee.firstName} {employee.lastName}
                </span>
              </td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>{formatCurrency(employee.salary)}</td>
              <td>{formatDate(employee.dateOfJoining)}</td>
              <td>
                <span className={`status-badge status-${employee.status}`}>
                  {employee.status}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button
                    type="button"
                    className="btn btn-sm btn-view"
                    onClick={() => onView(employee)}
                    title="View"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-edit"
                    onClick={() => onEdit(employee)}
                    title="Edit"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-delete"
                    onClick={() => onDelete(employee)}
                    title="Delete"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
