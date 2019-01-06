import React, { Component } from 'react';
import UserList from './UserList';
import RepoList from './repoList';
import SelectedRepo from './SelectedRepo';

export default class SearchComp extends Component {
    state = {
        isOpenList :false,
        isRepoListOpen: false,
        isRepoSelected: false,
        username:'',
        keepName:'',
        avatar_url : '',
        repo_name:'',
        repo_size:'',
        repo_created:'',
        repo_updated:'',
        repo_pushed:'',
        repo_stars:'',
        repo_watchers:'',
        repo_url:''

    }
    handleOpenList = ()=>{
        this.setState(
            {isOpenList:true   
        });
    }
    handleNameChange = (e) =>{
        this.setState({
            username: e.target.value,
            keepName: e.target.value
        });
    }
    handleRepoList = (name, avatar)=>{
        this.setState(
            {
                isRepoListOpen: true, 
                username: name, 
                avatar_url: avatar
            });
    }
    handleRepoclick = (name, size, created, updated, pushed, stars, watchers, url)=>{
        this.setState({
            isRepoSelected: true,
            repo_name:name,
            repo_size:size,
            repo_created:created,
            repo_updated:updated,
            repo_pushed:pushed,
            repo_stars:stars,
            repo_watchers:watchers,
            repo_url:url
        });
    }
    handleBackToRepoList=()=>{
        this.setState({
            isRepoSelected: false,
            isRepoListOpen: true,
        });
    }
    handleBackToUserList=()=>{
        this.setState({
            isRepoListOpen: false,
            isOpenList: true,
            username: this.state.keepName 
        });
    }
    render() {
        if(this.state.isOpenList){
            if(this.state.isRepoListOpen){
                if(this.state.isRepoSelected){
                    return(
                        <SelectedRepo
                            repo_name = {this.state.repo_name}
                            repo_size = {this.state.repo_size} 
                            repo_created ={this.state.repo_created} 
                            repo_updated = {this.state.repo_updated}
                            repo_pushed = {this.state.repo_pushed}
                            repo_stars = {this.state.repo_stars}
                            repo_watchers = {this.state.repo_watchers} 
                            repo_url = {this.state.repo_url}
                            backButtonClick = {this.handleBackToRepoList}         
                        />
                    );
                }else{
                    return(
                        <RepoList 
                            username = {this.state.username}
                            avatar_url = {this.state.avatar_url}
                            openRepoSelected = {this.handleRepoclick}
                            backClickButton = {this.handleBackToUserList}
                        />
                    );
                }
            }else{
                return(
                    <UserList
                        username = {this.state.username}
                        openRepoList = {this.handleRepoList}
                    />
                );
            }
        }
        else{
            return (
                <div className="search">
                    <div >
                        <input type="text" placeholder="Enter username to search" value={this.props.username} onChange={this.handleNameChange}/>
                        <div>
                            <button className="btn btn-primary" onClick={this.handleOpenList}>Search Users <i className="fas fa-search"></i></button>
                        </div>
                    </div>
    
                </div>
            );
        }
    }
}