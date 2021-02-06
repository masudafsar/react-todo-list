import {useState} from "react";
import Task from "./Task/Task";
import TaskInput from "./TaskInput/TaskInput";

import './App.scss';

const App = () => {
    const [tasksState, setTasksState] = useState([])

    const taskToggleHandler = (id) => {
        const index = tasksState.findIndex(task => task.id === id);
        const task = {...tasksState[index]};
        task.done = !task.done;
        const tasks = [...tasksState];
        tasks[index] = task;
        setTasksState(tasks);
    }

    const taskRemoveHandler = (id) => {
        const index = tasksState.findIndex(task => task.id === id);
        const tasks = [...tasksState];
        tasks.splice(index, 1);
        setTasksState(tasks);
    }

    const addNewTask = (taskTitle) => {
        const tasks = [...tasksState];
        const newTaskId = tasks.length !== 0
            ? tasks[0].id + 1
            : 0;
        tasks.unshift({id: newTaskId, title: taskTitle, done: false});
        setTasksState(tasks);
    };

    let tasks = tasksState.map((task) => {
        return (
            <Task
                key={task.id}
                done={task.done}
                title={task.title}
                toggleHandler={() => taskToggleHandler(task.id)}
                removeHandler={() => taskRemoveHandler(task.id)}/>
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
