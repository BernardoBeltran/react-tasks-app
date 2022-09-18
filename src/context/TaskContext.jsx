import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";


// Creamos un contexto para las tasks
export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    // Efecto de única ejecución para cambiar el estado de tasks por un objeto exterior importado como data
    useEffect(() => {
        setTasks(data);
    }, []);

    // Función para crear nuevas tareas
    const createTask = (task) => {
        /* Actializa el estado tasks con las tareas que ya posee más un nuevo objeto conformado por las propiedades recibidas en el objeto task */
        setTasks([
            ...tasks,
            {
                title: task.title,
                id: tasks.length,
                description: task.description,
            },
        ]);
    };

    // Función para eliminar tareas
    const deleteTask = (taskId) => {
        // Actualiza el estado tasks con un nuevo objeto que filtra los objetos cuyo id sea diferente del id recibido
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};
