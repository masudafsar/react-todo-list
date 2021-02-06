import {useState} from "react";
import Task from "./Task/Task";
import TaskInput from "./TaskInput/TaskInput";

import './App.scss';

const App = () => {
    const [tasksState, setTasksState] = useState([])

    const taskToggleHandler = (index) => {
        const task = {...tasksState[index]};
        task.done = !task.done;
        const tasks = [...tasksState];
        tasks[index] = task;
        setTasksState(tasks);
    }

    const taskRemoveHandler = (index) => {
        // const task = {...tasksState[index]};
        const tasks = [...tasksState];
        tasks.splice(index, 1);
        // tasks[index] = task;
        setTasksState(tasks);
    }

    const addNewTask = (taskTitle) => {
        const tasks = [...tasksState];
        tasks.unshift({title: taskTitle, done: false});
        setTasksState(tasks);
    };

    let tasks = tasksState.map((task, index) => {
        return (
            <Task
                key={index}
                done={task.done}
                title={task.title}
                toggleHandler={() => taskToggleHandler(index)}
                removeHandler={() => taskRemoveHandler(index)}/>
        );
    });

    return (
        <div className="App">
            <TaskInput onSubmitHandler={addNewTask}/>
            {tasks}
        </div>
    );
}

export default App;
