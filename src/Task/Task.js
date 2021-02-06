import React from 'react';
import './Task.scss'

const Task = ({title, done, toggleHandler}) => {
    let taskStatusClass = "task todo";
    if (done) taskStatusClass = "task done";

    return (
        <div className={taskStatusClass}>
            <div className="task-title">{title}</div>
            <div className="status" onClick={toggleHandler}/>
        </div>
    )
};

export default Task;