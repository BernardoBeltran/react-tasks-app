import React, {useContext} from "react";
import {TaskContext} from '../context/TaskContext'

const TaskCard = ({ task }) => {

    const {deleteTask} = useContext(TaskContext);

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)} className="btn-delete">Marcar como realizada</button>
        </div>
    );
};

export default TaskCard;
