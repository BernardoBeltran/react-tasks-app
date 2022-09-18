import React, {useContext} from "react";
import TaskCard from "./TaskCard";
import {TaskContext} from '../context/TaskContext'


const TaskList = () => {

    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return <h1>No hay tareas. ¡Agrega una!</h1>;
    }

    return (
        <div className="tasks-container">
            <mark>Tienes {tasks.length} tareas pendientes</mark>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
