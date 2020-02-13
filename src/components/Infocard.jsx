import React, {Component} from 'react';
export default class Infocard extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.name}:</h4>
                <p>{this.props.value}</p>
            </div>
            );
    }
}