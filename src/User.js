import React, { Component } from 'react';

export default class User extends Component{

    handleClick = ()=>{
        this.props.handleClickopenRepo(this.props.username, this.props.avatar);
    }

    render(){
            return(
                <div className="userClass" onClick={this.handleClick}>
                    <img src={this.props.avatar} alt="picture of there user" className="user-picture"/> <span>{this.props.username}</span>
                </div>
            );
    }
}