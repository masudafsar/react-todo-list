import React from 'react';
import styleClasses from './Task.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare} from "@fortawesome/free-regular-svg-icons";
import {faCheckSquare} from "@fortawesome/free-regular-svg-icons";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";

const Task = ({title, done, toggleHandler, removeHandler}) => {
    let taskStatusClass = [styleClasses.Task];
    let taskStatusIcon;

    if (done) {
        taskStatusClass.push(styleClasses.Done);
        taskStatusIcon = faCheckSquare;
    } else {
        taskStatusClass.push(styleClasses.Todo);
        taskStatusIcon = faSquare;
    }

    return (
        <div className={taskStatusClass.join(' ')}>
            <button type="button" className={styleClasses.Status} onClick={toggleHandler}>
                <FontAwesomeIcon icon={taskStatusIcon}/>
            </button>
            <div className={styleClasses.TaskTitle}>{title}</div>
            <button type="button" className={styleClasses.Remove} onClick={removeHandler}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
        </div>
    )
};

export default Task;