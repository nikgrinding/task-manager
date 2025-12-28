import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function TaskItem({ task, handleToggleTaskStatus, handleDeleteTask }) {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 mb-3 border border-gray-100">
            <div className="flex items-start gap-4">
                <input
                    type="checkbox"
                    checked={task.completed}
                    className="w-5 h-5 mt-0.5 cursor-pointer accent-blue-600"
                    onChange={() => {
                        handleToggleTaskStatus(task._id, task.completed);
                    }}
                />
                <div className="flex-1 min-w-0">
                    <p className={`text-base font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-900"}`}>
                        {task.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        {new Date(task.createdAt).toLocaleString()}
                    </p>
                </div>
                <div className="flex gap-2">
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
            </div>
        </div>
    );
}
