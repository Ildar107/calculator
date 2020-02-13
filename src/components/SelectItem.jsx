import React, {Component} from 'react';
export default class SelectItem extends React.Component {
    render() {
        return (
            <div className="input-line">
                <span>{this.props.label}:</span>
                <select defaultValue={this.props.default}> 
                    {
                    this.props.options.map((x,i) => { return <option value={x} key={i}>{x}</option>})
                }
                </select>
            </div>
            );
    }
}