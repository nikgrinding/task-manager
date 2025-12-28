import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function TaskItem({ task, handleToggleTaskStatus, handleDeleteTask }) {
    return (
        <div className="flex items-center gap-4 p-4 bg-white rounded shadow mb-3">
            <input
                type="checkbox"
                checked={task.completed}
                className="w-5 h-5 cursor-pointer"
                onChange={() => {
                    handleToggleTaskStatus(task._id, task.completed);
                }}
            />
            <span className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}>{task.name}</span>
            <div className="text-xs text-gray-400 mt-1">Created: {new Date(task.createdAt).toLocaleString()}</div>
            <Link to={`/edit/${task._id}`}>
                <Button variant="secondary">Edit</Button>
            </Link>
            <Button
                variant="danger"
                onClick={() => {
                    handleDeleteTask(task._id);
                }}
            >
                Delete
            </Button>
        </div>
    );
}
