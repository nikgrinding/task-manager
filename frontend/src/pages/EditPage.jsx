import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingMessage from "../components/ui/LoadingMessage";
import { getTask, updateTask } from "../api/tasks";

export default function EditPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState(null);
    const [name, setName] = useState("");
    const [completed, setCompleted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTask = async () => {
            try {
                setLoading(true);
                const { task } = await getTask(id);
                setTask(task);
                setName(task.name);
                setCompleted(task.completed);
                setError("");
            } catch (error) {
                setError(error.response?.data?.message || "Failed to fetch task");
            } finally {
                setLoading(false);
            }
        };
        fetchTask();
    }, [id]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                navigate("/");
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateTask(id, { name, completed });
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Failed to update task");
        }
    };

    if (loading) {
        return (
            <PageContainer>
                <LoadingMessage />
            </PageContainer>
        );
    }

    if (!task) {
        return (
            <PageContainer>
                <ErrorMessage error={error || "Task not found"} />
                <Link to="/">
                    <Button>Back to Home</Button>
                </Link>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Edit Task</h1>
            <ErrorMessage error={error} />
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-6 border border-gray-100">
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Task ID</label>
                    <p className="text-gray-500 font-mono text-sm">{task._id}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Created At</label>
                    <p className="text-gray-500 text-sm">{new Date(task.createdAt).toLocaleString()}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Last Updated</label>
                    <p className="text-gray-500 text-sm">{new Date(task.updatedAt).toLocaleString()}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Task Name</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter task name..." />
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="completed"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                        className="w-5 h-5 cursor-pointer accent-blue-600"
                    />
                    <label htmlFor="completed" className="cursor-pointer text-gray-700">
                        Mark as completed
                    </label>
                </div>
                <div className="flex gap-4 pt-2">
                    <Button type="submit">Save Changes</Button>
                    <Button variant="secondary" type="button" onClick={() => navigate("/")}>
                        Cancel (or press Esc)
                    </Button>
                </div>
            </form>
        </PageContainer>
    );
}
