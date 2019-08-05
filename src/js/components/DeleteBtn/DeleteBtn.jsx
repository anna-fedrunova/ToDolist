import React from 'react';
import './style.css';

export default class DeleteBtn extends React.Component {
    constructor(props){
        super (props);
        this.handleClickOutsideConfirm = this.handleClickOutsideConfirm.bind(this);
        this.showBlock = this.showBlock.bind(this);
    }
    showBlock(){
        this.props.showConfirmBlock();
        document.addEventListener('click', this.handleClickOutsideConfirm, false);
    }
    handleClickOutsideConfirm(e){
        if(e.target !== (document.querySelector('.confirm-block'))) {
            this.props.hideConfirmBlock();
            document.removeEventListener('click', this.handleClickOutsideConfirm, false);
        }
    }
    render() {
        return(
            <div className={!this.props.confirmBlock ? 'col-1' : 'col-2'}>
                <div className={!this.props.confirmBlock ? 'delete-btn' : 'delete-btn hidden'}
                     onClick={this.showBlock}>
                    x
                </div>
                <div className={!this.props.confirmBlock ? 'hidden confirm-block row ml-1' : 'confirm-block row ml-1'}>
                    <div className={!this.props.confirmBlock ? 'hidden del col-6 px-0' : 'del col-6 px-0'}
                         onClick={this.props.deleteTask}>
                        <p>X</p>
                    </div>
                    <div className={!this.props.confirmBlock ? 'hidden cancel col-6 px-0' : 'cancel col-6 px-0'}
                         onClick={this.props.hideConfirmBlock}>
                        <p>Undo</p>
                    </div>
                </div>
            </div>

        );
    }
}

