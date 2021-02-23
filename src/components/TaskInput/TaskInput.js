import React, {useRef} from 'react';
// import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

import styleClasses from './TaskInput.module.scss';

const TaskInput = ({onSubmitHandler}) => {
    let taskInputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (taskInputRef.current.value && taskInputRef.current.value.trim())
            onSubmitHandler(taskInputRef.current.value);
        taskInputRef.current.value = '';
        taskInputRef.current.focus();
    };

    return (
        <form className={styleClasses.TaskInput} onSubmit={onFormSubmit}>
            <input
                type="text"
                className={styleClasses.Input}
                placeholder="Insert a task here..."
                ref={taskInputRef}/>
            <button type="submit" className={styleClasses.Submit}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </form>
    );
};

// TaskInput.propTypes = {
//     onSubmitHandler: PropTypes.func,
// };

export default TaskInput;
