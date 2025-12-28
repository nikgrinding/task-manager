import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function TaskForm({ handleCreateTask }) {
    const [taskName, setTaskName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        handleCreateTask(taskName);
        setTaskName("");
    };

    return (
        <form onSubmit={onSubmit} className="mb-8">
            <div className="flex gap-4 items-start">
                <div className="flex-1">
                    <Input
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Enter task name..."
                    />
                </div>
                <Button type="submit">Add Task</Button>
            </div>
        </form>
    );
}
