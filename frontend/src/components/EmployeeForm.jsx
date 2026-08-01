import { DEPARTMENTS } from "../utils/helpers";

function EmployeeForm({ formData, onChange, onSubmit, onCancel, isEditing, loading }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <form className="employee-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Doe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john.doe@company.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 9876543210"
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department *</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="position">Position *</label>
          <input
            id="position"
            name="position"
            type="text"
            value={formData.position}
            onChange={handleChange}
            required
            placeholder="Software Engineer"
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary (INR) *</label>
          <input
            id="salary"
            name="salary"
            type="number"
            min="0"
            value={formData.salary}
            onChange={handleChange}
            required
            placeholder="500000"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfJoining">Date of Joining *</label>
          <input
            id="dateOfJoining"
            name="dateOfJoining"
            type="date"
            value={formData.dateOfJoining}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status *</label>
          <select id="status" name="status" value={formData.status} onChange={handleChange} required>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="btn btn-secondary" onClick={onCancel} disabled={loading}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Saving..." : isEditing ? "Update Employee" : "Add Employee"}
        </button>
      </div>
    </form>
  );
}

export default EmployeeForm;
