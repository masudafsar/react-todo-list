import React, {useState} from 'react';

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
            <input type="text" className="input" onChange={onInputChangeHandler}/>
            <button type="submit" className="submit">Add</button>
        </form>
    );
};

export default TaskInput;