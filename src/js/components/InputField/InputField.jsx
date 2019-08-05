import React from 'react';
import './style.css'

export default class InputField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.addTask = this.addTask.bind(this)
    }
    addTask(){
        if(this.state.text !== '' && this.state.text.trim()) {
            let id = Date.now();
            let newTask = {
                text: this.state.text,
                id: id,
                inProgress: true
            };
            this.setState({
                text: ''
            });
            this.props.onTaskAdd(newTask)
        }
    }
    triggerAdding(e){
        if (e.key === "Enter") {
           this.addTask()
        }
    }
    handleInput2(e) {
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return(
            <div className='input-group'>
                <input type='text'
                       className='input form-control'
                       aria-describedby="add-btn"
                       placeholder='What do you have to do?'
                       value={this.state.text}
                       onChange = {(e) => this.handleInput2(e)}
                       onKeyDown={(e) => this.triggerAdding(e)}/>
                <div className="input-group-append">
                    <button className='btn btn-outline-success'
                            id="add-btn"
                            disabled={!this.state.text.trim()}
                            onClick={this.addTask}>Add</button>
                </div>
            </div>

        );
    }
}