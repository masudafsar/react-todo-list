import React from 'react';
import './TaskInput.scss';

const TaskInput = ({onSubmitHandler}) => {
    let taskInput = React.createRef();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (taskInput.current.value && taskInput.current.value.trim())
            onSubmitHandler(taskInput.current.value);
        taskInput.current.value = '';
    };

    return (
        <form className="task-input" onSubmit={onFormSubmit}>
            <input type="text" className="input" placeholder="Inser a task here..." ref={taskInput}/>
            <button type="submit" className="submit">Add</button>
        </form>
    );
};

export default TaskInput;