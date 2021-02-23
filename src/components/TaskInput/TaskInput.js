import React from 'react';
import styleClasses from './TaskInput.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const TaskInput = ({onSubmitHandler}) => {
    let taskInput = React.createRef();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (taskInput.current.value && taskInput.current.value.trim())
            onSubmitHandler(taskInput.current.value);
        taskInput.current.value = '';
    };

    return (
        <form className={styleClasses.TaskInput} onSubmit={onFormSubmit}>
            <input type="text" className={styleClasses.Input}
                   placeholder="Insert a task here..." ref={taskInput}/>
            <button type="submit" className={styleClasses.Submit}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </form>
    );
};

export default TaskInput;
