import { formatCurrency, formatDate } from "../utils/helpers";

function EmployeeDetails({ employee }) {
  if (!employee) return null;

  return (
    <div className="employee-details">
      <div className="details-header">
        <div className="details-avatar">
          {employee.firstName.charAt(0)}
          {employee.lastName.charAt(0)}
        </div>
        <div>
          <h3>
            {employee.firstName} {employee.lastName}
          </h3>
          <p>{employee.position}</p>
          <span className={`status-badge status-${employee.status}`}>{employee.status}</span>
        </div>
      </div>
      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">Email</span>
          <span className="detail-value">{employee.email}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Phone</span>
          <span className="detail-value">{employee.phone}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Department</span>
          <span className="detail-value">{employee.department}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Position</span>
          <span className="detail-value">{employee.position}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Salary</span>
          <span className="detail-value">{formatCurrency(employee.salary)}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Date of Joining</span>
          <span className="detail-value">{formatDate(employee.dateOfJoining)}</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
