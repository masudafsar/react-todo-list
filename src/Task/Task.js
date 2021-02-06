import React from 'react';
import './Task.scss'

const Task = ({title, done, toggleHandler, removeHandler}) => {
    let taskStatusClass = "task todo";
    if (done) taskStatusClass = "task done";

    return (
        <div className={taskStatusClass}>
            <div className="status" onClick={toggleHandler}>
                <FontAwesomeIcon icon={taskStatusIcon}/>
            </div>
            <div className="task-title">{title}</div>
            <button type="button" className="remove" onClick={removeHandler}>
                Remove
            </button>
        </div>
    )
};

export default Task;