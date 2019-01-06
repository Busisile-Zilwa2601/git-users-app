import React, { Component } from 'react';
import axios from 'axios';
import RepoInfo from './RepoInfo';
import AvatarRepo from './AvatarRepo';

export default class RepoList extends Component{
    state={
        repos:[],
        name:'',
        date: ''
    }
    componentDidMount(){
        axios.get(`https://api.github.com/users/`+this.newMethod()+`/repos`).then(res=>{
            const repos = res.data;
            this.setState({repos: repos});
        })
        axios.get(`https://api.github.com/users/`+this.newMethod()).then(res=>{
            const userInfo = res.data;
            console.log(userInfo.name);
            console.log(userInfo.created_at);
            this.setState(
                {
                    name: userInfo.name,
                    date: userInfo.created_at
                });
        })
    }

    newMethod = ()=>{
        return this.props.username;
    }
    render(){
        const repoList = this.state.repos.map((repo)=>(
            <RepoInfo 
                key ={repo.id}
                repo_name ={repo.name}
                repo_size = {repo.size}
                repo_created = {repo.created_at}
                repo_updated = {repo.updated_at}
                repo_pushed = {repo.pushed_at}
                repo_stars = {repo.stargazers_count}
                repo_watchers = {repo.watchers_count}
                repo_url = {repo.url}
                onRepoClick = {this.props.openRepoSelected}
            />
        ));
        return(
            <div>
                <div className="row">
                    <button className="btn btn-primary offset-1" onClick={this.props.backClickButton}>Back</button>
                </div>
                <div className="row">
                    <div className = "col-md-6">
                        < AvatarRepo
                            avatar = {this.props.avatar_url}
                            // username = {this.props.username}
                            created = {this.state.date}
                            name = {this.state.name}   
                        />
                    </div>
                    <div className = "col-md-6">
                        {repoList}
                    </div>
                </div>
            </div>
        );
    }
}