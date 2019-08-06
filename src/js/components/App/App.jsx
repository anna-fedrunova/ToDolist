import React from 'react';
import InputField from '../InputField/InputField.jsx';
import Filters from "../Filters/Filters.jsx";
import TasksGrid from "../TasksGrid/TasksGrid.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [{
                id: 1,
                text: 'Be awesome',
                inProgress: true
            }],
            filter: 'all'
        };
        this.handleTaskAdd = this.handleTaskAdd.bind(this);
        this.handleTaskStatusChange= this.handleTaskStatusChange.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this._getVisibleTasks = this._getVisibleTasks.bind(this);
    }
    componentDidMount() {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks){
            this.setState({
                tasks: tasks
            });
        }
    }
    handleTaskAdd(task){
        let newTasks = [...this.state.tasks];
        newTasks.unshift(task);
        this.setState({
            tasks: newTasks,
        }, this._updateLocalStorage)
    }
    handleTaskStatusChange(taskId){
        let newTasks = [...this.state.tasks];
        let changedTask = newTasks.find(task => task.id === taskId);
        changedTask.inProgress = !changedTask.inProgress;
        this.setState({
            tasks: newTasks,
        }, this._updateLocalStorage)
    }
    handleTaskDelete(task){
        let id = task.id;
        let newTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({
            tasks: newTasks,
        }, this._updateLocalStorage)

    }
    handleFilter(filter){
        this.setState({
            filter: filter
        })
    }
    _getVisibleTasks(tasks, filter){
        if(filter === 'done') {
            return tasks.filter(task => task.inProgress === false)
        }
        if(filter === 'progress') {
            return tasks.filter(task => task.inProgress === true)
        }
        return tasks;
    }
    _updateLocalStorage(){
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
    render() {
        return(
            <div className='container'>
                <div className='row py-4'>
                    <div className='title col-12'>
                        <h1>To-do List</h1>
                    </div>
                </div>
                <div className='app'>
                    <InputField onTaskAdd={this.handleTaskAdd}/>
                    <Filters filter={this.state.filter}
                             onFilter={this.handleFilter}/>
                    <TasksGrid tasks={this._getVisibleTasks(this.state.tasks, this.state.filter)}
                               onTaskDelete={this.handleTaskDelete}
                               onTaskStatusChange={this.handleTaskStatusChange}/>
                </div>
            </div>
        );
    }
}

export default App;

