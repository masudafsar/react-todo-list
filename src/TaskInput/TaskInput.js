import React, {useState} from 'react';
import './TaskInput.css';

const TaskInput = ({onSubmitHandler}) => {
    const [taskTitleState, setTaskTitleState] = useState('');

    const onInputChangeHandler = (event) => {
        setTaskTitleState(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmitHandler(taskTitleState);
    };

    return (
        <form className="task-input" onSubmit={onFormSubmit}>
            <input type="text" className="input" placeholder="Inser a task here..." onChange={onInputChangeHandler}/>
            <button type="submit" className="submit">Add</button>
        </form>
    );
};

export default TaskInput;