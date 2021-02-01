import './App.css';
import {useState} from "react";
import Task from "./Task/Task";

const App = () => {
    const [tasksState, setTasksState] = useState([
        {title: 'Create a ToDo list App', done: false},
        {title: 'Learn about ReactJs', done: true}
    ])

    const taskToggleHandler = (index) => {
        const task = {...tasksState[index]};
        task.done=!task.done;
        const tasks = [...tasksState];
        tasks[index] = task;
        setTasksState(tasks);
    }

    let tasks = tasksState.map((task, index) => {
        return (
            <Task
                key={index}
                done={task.done}
                title={task.title}
                toggleHandler={() => taskToggleHandler(index)}/>
        );
    });

    return (
        <div className="App">
            {tasks}
        </div>
    );
}

export default App;
