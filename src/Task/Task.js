import React from 'react';
import './Task.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare} from "@fortawesome/free-regular-svg-icons";
import {faCheckSquare} from "@fortawesome/free-regular-svg-icons";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";

const Task = ({title, done, toggleHandler, removeHandler}) => {
    let taskStatusClass = "task todo";
    let taskStatusIcon = faSquare;

    if (done) {
        taskStatusClass = "task done";
        taskStatusIcon = faCheckSquare;
    }

    return (
        <div className={taskStatusClass}>
            <button type="button" className="status" onClick={toggleHandler}>
                <FontAwesomeIcon icon={taskStatusIcon}/>
            </button>
            <div className="task-title">{title}</div>
            <button type="button" className="remove" onClick={removeHandler}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
        </div>
    )
};

export default Task;