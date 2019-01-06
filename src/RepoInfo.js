import React, { Component } from 'react';

export default class RepoInfo extends Component {

    handleRepoClick=()=>{
        this.props.onRepoClick(
            this.props.repo_name,
            this.props.repo_size,
            this.props.repo_created,
            this.props.repo_updated,
            this.props.repo_pushed,
            this.props.repo_stars,
            this.props.repo_watchers,
            this.props.repo_url
        );
    }
    render() {
        return (
            <div className="row">
                <div className="repoClass" onClick={this.handleRepoClick}>
                        {this.props.repo_name}<br />
                        <i className="fas fa-code-branch">{this.props.repo_url}</i>
                </div>
            </div>
        );
    }
}