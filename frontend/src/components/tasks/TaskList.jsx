import TaskItem from "./TaskItem";

export default function TaskList({ tasks, handleToggleTaskStatus, handleDeleteTask }) {
    return (
        <>
            {tasks.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No tasks yet. Create one above!</p>
            ) : (
                tasks.map((task) => {
                    return (
                        <TaskItem
                            key={task._id}
                            task={task}
                            handleToggleTaskStatus={handleToggleTaskStatus}
                            handleDeleteTask={handleDeleteTask}
                        />
                    );
                })
            )}
        </>
    );
}
