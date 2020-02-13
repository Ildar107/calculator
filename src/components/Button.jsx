import React, {Component} from 'react';
export default class Button extends React.Component {
    render() {
        return (
            <div className="container" onClick={this.onClick} value={this.props.label}>
                <label>{this.props.label}</label>
                <input type="radio" name={this.props.name}></input>
            </div>
            );
    }

    onClick(e) {
        e.currentTarget.attributes[1].value
    }
}