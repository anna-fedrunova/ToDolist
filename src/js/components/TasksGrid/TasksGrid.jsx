import React from 'react'
import Task from "../Task/Task.jsx";

export default class TasksGrid extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.tasks.map(task => {
                    return (
                        <Task key={task.id}
                              id={task.id}
                              inProgress={task.inProgress}
                              onDelete={this.props.onTaskDelete.bind(null, task)}
                              onStatusChange={this.props.onTaskStatusChange.bind(null, task.id)}>
                            {task.text}
                        </Task>
                    );
                })}
            </div>
        );
    }
}