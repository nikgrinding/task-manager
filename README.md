# Task Manager

A full-stack MERN application for managing tasks with create, edit, delete, and completion tracking functionality.

## Tech Stack

**Frontend:** React 19, React Router, TailwindCSS 4, Vite
**Backend:** Node.js, Express 5, MongoDB, Mongoose

## Project Structure

```
task-manager/
├── backend/
│   ├── app.js                      # Application entry point
│   ├── controllers/
│   │   └── tasks.js                # Task controller logic
│   ├── db/
│   │   └── connect.js              # MongoDB connection
│   ├── errors/
│   │   ├── Custom404Error.js       # 404 error class
│   │   └── CustomError.js          # Base error class
│   ├── middleware/
│   │   └── errorHandler.js         # Error handling middleware
│   ├── models/
│   │   └── Task.js                 # Task schema
│   ├── routes/
│   │   └── tasks.js                # Task routes
│   └── utils/
│       ├── asyncWrapper.js         # Async error wrapper
│       └── throwIfResourceNotFound.js
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── tasks.js            # API service layer
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   └── PageContainer.jsx
│   │   │   ├── tasks/
│   │   │   │   ├── TaskForm.jsx
│   │   │   │   ├── TaskItem.jsx
│   │   │   │   └── TaskList.jsx
│   │   │   └── ui/
│   │   │       ├── Button.jsx
│   │   │       ├── ErrorMessage.jsx
│   │   │       ├── Input.jsx
│   │   │       └── LoadingMessage.jsx
│   │   ├── pages/
│   │   │   ├── EditPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── NotFoundPage.jsx
│   │   ├── App.jsx                 # Main app component
│   │   └── main.jsx                # Application entry
│   └── vite.config.js              # Vite configuration
└── README.md
```

## Setup

```bash
git clone https://github.com/nikgrinding/task-manager.git
cd task-manager
```

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Configure .env with MongoDB URI
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/tasks` | Get all tasks |
| POST | `/api/v1/tasks` | Create a new task |
| GET | `/api/v1/tasks/:id` | Get a specific task |
| PUT | `/api/v1/tasks/:id` | Update a task |
| DELETE | `/api/v1/tasks/:id` | Delete a task |

## Environment Variables

**Backend (.env)**
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
```

**Frontend (.env)**
```
VITE_API_URL=http://localhost:3000/api/v1/tasks
```

## License

This project is licensed under the MIT License.
