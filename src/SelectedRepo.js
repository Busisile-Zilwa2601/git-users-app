import React,{Component} from 'react';

export default class SelectedRepo extends Component{

    render(){
        return(
            <div>
                <div>
                    <button className="btn btn-primary" onClick={this.props.backButtonClick}>Back</button>
                </div>
                <ul className = "list-unstyled">
                    <li>Name : {this.props.repo_name}</li>
                    <li>Size: {this.props.repo_size}kB</li>
                    <li>Created on: {this.props.repo_created}</li>
                    <li>Updated on:{this.props.repo_updated}</li>
                    <li>Pushed on:{this.props.repo_pushed}</li>
                    <li>Number of Stars: {this.props.repo_stars}</li>
                    <li>Number of watchers: {this.props.repo_watchers}</li>
                    <li><i className="fas fa-code-branch"> {this.props.repo_url}</i></li>
                </ul>
            </div>
        )
    }
} 