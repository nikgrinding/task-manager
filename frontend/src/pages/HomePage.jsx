import { useEffect, useState } from "react";
import axios from "axios";
import PageContainer from "../components/layout/PageContainer";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingMessage from "../components/ui/LoadingMessage";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";

export default function HomePage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1/tasks";

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true);
                const { tasks } = (await axios.get(API_URL)).data;
                setTasks(tasks);
                setError("");
            } catch (error) {
                setError(error.response?.data?.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, [API_URL]);

    if (loading) {
        return (
            <PageContainer>
                <LoadingMessage />
            </PageContainer>
        );
    }

    const handleCreateTask = async (taskName) => {
        try {
            const { task } = (await axios.post(API_URL, { name: taskName })).data;
            setTasks([...tasks, task]);
            setError("");
        } catch (error) {
            setError(error.response?.data?.message || "Failed to create task");
        }
    };

    const handleToggleTaskStatus = async (id, currentStatus) => {
        const originalTasks = [...tasks];
        setTasks(
            tasks.map((task) => {
                if (task._id === id) {
                    return { ...task, completed: !currentStatus };
                }
                return task;
            })
        );
        try {
            await axios.patch(`${API_URL}/${id}`, { completed: !currentStatus });
            setError("");
        } catch (error) {
            setTasks(originalTasks);
            setError(error.response?.data?.message || "Failed to update task");
        }
    };

    const handleDeleteTask = async (id) => {
        const originalTasks = [...tasks];
        setTasks(
            tasks.filter((task) => {
                return task._id !== id;
            })
        );
        try {
            await axios.delete(`${API_URL}/${id}`);
            setError("");
        } catch (error) {
            setTasks(originalTasks);
            setError(error.response?.data?.message || "Failed to delete task");
        }
    };

    return (
        <PageContainer>
            <h1 className="text-4xl font-bold mb-8 text-center">Task Manager</h1>
            <ErrorMessage error={error} />
            <TaskForm handleCreateTask={handleCreateTask} />
            <TaskList
                tasks={tasks}
                handleToggleTaskStatus={handleToggleTaskStatus}
                handleDeleteTask={handleDeleteTask}
            />
        </PageContainer>
    );
}
