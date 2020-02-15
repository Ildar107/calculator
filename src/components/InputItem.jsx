import React, {Component} from 'react';
export default class InputItem extends React.Component {
    render() {
        return (
            <div className="input-line">
                <span>{this.props.label}:</span>
                <input type="text" value={this.props.value} />
            </div>
            );
    }
}