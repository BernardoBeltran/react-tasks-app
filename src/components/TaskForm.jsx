import React, { useState, useContext } from "react";
import { TaskContext } from '../context/TaskContext'

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description,
        });
        setTitle("");
        setDescription("");
    };

    return (
        <div className="form">
            <h5>Agregar una nueva tarea</h5>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                    required
                />
                <textarea
                    placeholder="Describe tu tarea"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                ></textarea>
                <button>Guardar</button>
            </form>
        </div>
    );
};

export default TaskForm;
