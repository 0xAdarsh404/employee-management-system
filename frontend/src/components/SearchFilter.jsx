import { DEPARTMENTS } from "../utils/helpers";

function SearchFilter({ filters, onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search by name, email, or position..."
          value={filters.search}
          onChange={handleChange}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="department">Department</label>
        <select
          id="department"
          name="department"
          value={filters.department}
          onChange={handleChange}
        >
          <option value="">All Departments</option>
          {DEPARTMENTS.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="status">Status</label>
        <select id="status" name="status" value={filters.status} onChange={handleChange}>
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
