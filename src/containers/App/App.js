import React, {Component} from "react";
import Task from "../../components/Task/Task";
import TaskInput from "../../components/TaskInput/TaskInput";
import CollapsiblePanel from "../../components/CollapsiblePanel/CollapsiblePanel";

import styleClasses from './App.module.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };
    }

    render() {
        let todoTasks = this.state.tasks.filter(task => !task.done).map(this.taskGenerator);
        let doneTasks = this.state.tasks.filter(task => task.done).map(this.taskGenerator);

        return (
            <div className={styleClasses.App}>
                <TaskInput onSubmitHandler={this.addNewTask}/>
                {todoTasks}
                <CollapsiblePanel>
                    {doneTasks}
                </CollapsiblePanel>
            </div>
        );
    }

    taskToggleHandler = (id) => {
        const index = this.state.tasks.findIndex(task => task.id === id);
        const task = {...this.state.tasks[index]};
        task.done = !task.done;
        const tasks = [...this.state.tasks];
        tasks[index] = task;
        this.setState({tasks: tasks});
    }

    taskRemoveHandler = (id) => {
        const index = this.state.tasks.findIndex(task => task.id === id);
        const tasks = [...this.state.tasks];
        tasks.splice(index, 1);
        this.setState({tasks: tasks});
    }

    addNewTask = (taskTitle) => {
        const tasks = [...this.state.tasks];
        const newTaskId = tasks.length !== 0
            ? tasks[0].id + 1
            : 0;
        tasks.unshift({id: newTaskId, title: taskTitle, done: false});
        this.setState({tasks: tasks});
    };

    taskGenerator = (task) => {
        return (
            <Task
                key={task.id}
                done={task.done}
                title={task.title}
                toggleHandler={() => this.taskToggleHandler(task.id)}
                removeHandler={() => this.taskRemoveHandler(task.id)}/>
        );
    };
}

export default App;
