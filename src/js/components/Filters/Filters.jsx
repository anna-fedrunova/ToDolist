import React from 'react';
import './style.css'

export default class Filters extends React.Component{
    constructor(props){
        super(props);
        this.filterTasks = this.filterTasks.bind(this)
    }
    filterTasks(e){
        let filter = e.target.value;
        this.props.onFilter(filter);
    }
    render(){
        let labelStyle = 'btn btn-block btn-sm btn-outline-warning';
        let labelStyleActive = 'btn btn-block btn-sm btn-outline-warning active';
        return(
            <div className='filters-group row'>
                <div className='col'>
                    <input type='radio'
                           name='filter'
                           value='all'
                           id='all'
                           className='radio-btn'
                           checked={(this.props.filter === 'all') ? 'checked' : ''}
                           onChange={this.filterTasks}/>
                    <label htmlFor="all" className={(this.props.filter === 'all') ? labelStyleActive : labelStyle}
                           aria-pressed="true">All</label>
                </div>
                <div className='col'>
                    <input type='radio'
                           name='filter'
                           value='done'
                           id='done'
                           className='radio-btn'
                           checked={(this.props.filter === 'done') ? 'checked' : ''}
                           onChange={this.filterTasks}/>
                    <label htmlFor="done" className={(this.props.filter === 'done') ? labelStyleActive : labelStyle}
                           aria-pressed="true">Finished</label>
                </div>
                <div className='col'>
                    <input type='radio'
                           name='filter'
                           value='progress'
                           id='progress'
                           className='radio-btn'
                           checked={(this.props.filter === 'progress') ? 'checked' : ''}
                           onChange={this.filterTasks}/>
                    <label htmlFor="progress" className={(this.props.filter === 'progress') ? labelStyleActive : labelStyle}
                           aria-pressed="true">In progress</label>
                </div>
            </div>
        );
    }
}