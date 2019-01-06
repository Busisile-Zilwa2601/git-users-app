import React, { Component } from 'react';
import User from './User';
import axios from 'axios';

export default class UserList extends Component{
    state = {
        users : []
    }
    componentDidMount(){
        axios.get(`https://api.github.com/search/users?q=`+ this.newMethod()).then(res=>{
            const users = res.data;
            this.setState({users: users.items});
        })
    }
    newMethod = ()=>{
        return this.props.username;
    }

    render(){
        const usersList = this.state.users.map((user)=>(
            <User 
                key = {user.id}
                user_id = {user.id}
                avatar = {user.avatar_url}
                username = {user.login}
                handleClickopenRepo = {this.props.openRepoList}
             /> 
        ));
        return(
            <div className="allUsers">
                {usersList}
            </div>
        );
    }
}