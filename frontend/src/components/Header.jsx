function Header({ onAddClick, employeeCount }) {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>Employee Management System</h1>
          <p>Manage your workforce — view, add, update, and delete employees</p>
        </div>
        <div className="header-actions">
          <span className="badge">{employeeCount} Employees</span>
          <button type="button" className="btn btn-primary" onClick={onAddClick}>
            + Add Employee
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
