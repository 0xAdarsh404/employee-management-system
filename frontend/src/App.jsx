import { useCallback, useEffect, useState } from "react";
import {
  createEmployee,
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from "./services/api";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeDetails from "./components/EmployeeDetails";
import Modal from "./components/Modal";
import ConfirmDialog from "./components/ConfirmDialog";
import {
  formatEmployeeForForm,
  formatEmployeeForSubmit,
  getEmptyForm,
} from "./utils/helpers";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [filters, setFilters] = useState({
    search: "",
    department: "",
    status: "",
  });

  const [formData, setFormData] = useState(getEmptyForm());
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const showMessage = (type, message) => {
    if (type === "error") {
      setError(message);
      setSuccess("");
    } else {
      setSuccess(message);
      setError("");
    }
    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 4000);
  };

  const fetchEmployees = useCallback(async () => {
    try {
      setLoading(true);
      const params = Object.fromEntries(
        Object.entries(filters).filter(([, value]) => value !== "")
      );
      const { data } = await getEmployees(params);
      setEmployees(data.data);
    } catch (err) {
      showMessage("error", err.response?.data?.message || "Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const openAddForm = () => {
    setFormData(getEmptyForm());
    setSelectedEmployee(null);
    setIsEditing(false);
    setIsFormOpen(true);
  };

  const openEditForm = (employee) => {
    setFormData(formatEmployeeForForm(employee));
    setSelectedEmployee(employee);
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const openViewModal = (employee) => {
    setSelectedEmployee(employee);
    setIsViewOpen(true);
  };

  const openDeleteDialog = (employee) => {
    setEmployeeToDelete(employee);
    setIsDeleteOpen(true);
  };

  const closeFormModal = () => {
    setIsFormOpen(false);
    setFormData(getEmptyForm());
    setSelectedEmployee(null);
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = formatEmployeeForSubmit(formData);

      if (isEditing && selectedEmployee) {
        await updateEmployee(selectedEmployee._id, payload);
        showMessage("success", "Employee updated successfully");
      } else {
        await createEmployee(payload);
        showMessage("success", "Employee added successfully");
      }

      closeFormModal();
      fetchEmployees();
    } catch (err) {
      showMessage("error", err.response?.data?.message || "Operation failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!employeeToDelete) return;

    setSubmitting(true);
    try {
      await deleteEmployee(employeeToDelete._id);
      showMessage("success", "Employee deleted successfully");
      setIsDeleteOpen(false);
      setEmployeeToDelete(null);
      fetchEmployees();
    } catch (err) {
      showMessage("error", err.response?.data?.message || "Failed to delete employee");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="app">
      <Header onAddClick={openAddForm} employeeCount={employees.length} />

      <main className="main-content">
        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <SearchFilter filters={filters} onFilterChange={setFilters} />

        <EmployeeList
          employees={employees}
          loading={loading}
          onView={openViewModal}
          onEdit={openEditForm}
          onDelete={openDeleteDialog}
        />
      </main>

      <Modal
        isOpen={isFormOpen}
        title={isEditing ? "Update Employee" : "Add Employee"}
        onClose={closeFormModal}
      >
        <EmployeeForm
          formData={formData}
          onChange={setFormData}
          onSubmit={handleSubmit}
          onCancel={closeFormModal}
          isEditing={isEditing}
          loading={submitting}
        />
      </Modal>

      <Modal
        isOpen={isViewOpen}
        title="Employee Details"
        onClose={() => setIsViewOpen(false)}
      >
        <EmployeeDetails employee={selectedEmployee} />
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteOpen}
        title="Delete Employee"
        message={
          employeeToDelete
            ? `Are you sure you want to delete ${employeeToDelete.firstName} ${employeeToDelete.lastName}? This action cannot be undone.`
            : ""
        }
        onConfirm={handleDelete}
        onCancel={() => {
          setIsDeleteOpen(false);
          setEmployeeToDelete(null);
        }}
        loading={submitting}
      />
    </div>
  );
}

export default App;
