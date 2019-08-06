import React from 'react';
import './style.css'
import DeleteBtn from "../DeleteBtn/DeleteBtn.jsx";

export default class Task extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            confirmBlock: false
        };
        this.showConfirmBlock = this.showConfirmBlock.bind(this);
        this.hideConfirmBlock = this.hideConfirmBlock.bind(this);
    }
    showConfirmBlock(){
        this.setState({
            confirmBlock: true
        });
    }
    hideConfirmBlock(){
        this.setState({
            confirmBlock: false
        });
    }
    render(){
        let textStyle, tickStyle, tickBlock;
        if(!this.props.inProgress){
            textStyle = 'text-done';
            tickStyle = 'done'
        } else {
            textStyle = 'text-progress';
            tickStyle = 'in-progress'
        }
        if(this.state.confirmBlock){
            tickBlock = 'hidden col-1'
        } else {
            tickBlock = 'col-1'
        }
        return(
            <div className='task row'>
                <div className={tickBlock}>
                    <div className={tickStyle}
                         onClick={this.props.onStatusChange}>
                        <input type='checkbox' className='checkbox'/>
                    </div>
                </div>
                <div className='task-text col-10 pr-0'>
                    <p className={textStyle}
                           onClick={this.props.onStatusChange}>
                        {this.props.children}
                    </p>
                </div>
                    <DeleteBtn deleteTask={this.props.onDelete}
                               showConfirmBlock={this.showConfirmBlock}
                               hideConfirmBlock={this.hideConfirmBlock}
                               confirmBlock={this.state.confirmBlock}/>
            </div>
            );
    }
}