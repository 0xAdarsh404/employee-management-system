const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  department: "",
  position: "",
  salary: "",
  dateOfJoining: "",
  status: "active",
};

export const getEmptyForm = () => ({ ...emptyForm });

export const formatEmployeeForForm = (employee) => ({
  firstName: employee.firstName || "",
  lastName: employee.lastName || "",
  email: employee.email || "",
  phone: employee.phone || "",
  department: employee.department || "",
  position: employee.position || "",
  salary: employee.salary?.toString() || "",
  dateOfJoining: employee.dateOfJoining
    ? new Date(employee.dateOfJoining).toISOString().split("T")[0]
    : "",
  status: employee.status || "active",
});

export const formatEmployeeForSubmit = (formData) => ({
  ...formData,
  salary: Number(formData.salary),
});

export const DEPARTMENTS = [
  "Engineering",
  "Human Resources",
  "Marketing",
  "Sales",
  "Finance",
  "Operations",
  "Support",
];

export const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
