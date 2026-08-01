# Employee Management System (MERN Stack)

A full-stack Employee Management System built with **MongoDB**, **Express.js**, **React.js**, and **Node.js**. Supports complete CRUD operations — View, Add, Update, and Delete employees.

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React.js, Vite, Axios               |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB, Mongoose                   |
| Tools      | Git, Postman                        |

## Features

- **VIEW** — List all employees with search and filter (department, status)
- **ADD** — Create new employees with form validation
- **UPDATE** — Edit existing employee records
- **DELETE** — Remove employees with confirmation dialog
- Responsive UI with modern design
- RESTful API with proper error handling
- Postman collection for API testing

## Project Structure

```
MERN STACK/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Business logic
│   ├── middleware/      # Error handling
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── server.js        # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # Axios API calls
│   │   ├── utils/       # Helpers
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── postman/             # Postman collection
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or MongoDB Atlas)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) (optional, for API testing)

## Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "MERN STACK"
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/employee_management
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

The API will run at `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder (optional — defaults work with proxy):

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## API Endpoints

| Method | Endpoint              | Description          |
| ------ | --------------------- | -------------------- |
| GET    | `/api/health`         | Health check         |
| GET    | `/api/employees`      | Get all employees    |
| GET    | `/api/employees/:id`  | Get employee by ID   |
| POST   | `/api/employees`      | Create employee      |
| PUT    | `/api/employees/:id`  | Update employee      |
| DELETE | `/api/employees/:id`  | Delete employee      |

### Query Parameters (GET /api/employees)

- `search` — Search by name, email, or position
- `department` — Filter by department
- `status` — Filter by status (`active` / `inactive`)

### Sample Request Body (POST/PUT)

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@company.com",
  "phone": "+91 9876543210",
  "department": "Engineering",
  "position": "Software Engineer",
  "salary": 800000,
  "dateOfJoining": "2024-01-15",
  "status": "active"
}
```

## Postman Testing

Import the collection from `postman/Employee-Management-API.postman_collection.json` into Postman.

1. Set the `baseUrl` variable to `http://localhost:5000/api`
2. After creating an employee, copy its `_id` into the `employeeId` variable for GET/PUT/DELETE tests

## Git Workflow

```bash
git init
git add .
git commit -m "Initial commit: Employee Management System"
```

## License

MIT
