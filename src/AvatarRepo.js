import React,{Component} from 'react';

export default class AvatarRepo extends Component{

    render(){
        return(
            <div className="">
                <div className="row">
                    <img src={this.props.avatar} className="offset-6 user-picture"/>
                </div>
                <div className="row">
                    <div className="offset-6">
                        Name: {this.props.name}
                    </div>
                </div>
                <div className="row">
                    <div className="offset-6">
                        Date: {this.props.created}
                    </div>
                </div>
            </div>
        );
    }
}