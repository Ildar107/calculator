import React, {Component} from 'react';
import Button from './Button'
export default class ButtonRow extends React.Component {
    render() {
        return this.props.count === 6 ? (
            <div className="row">
                <div>{this.props.title}</div>
                <div className="collection">
                    <Button label={12}  name ="terms"/>
                    <Button label={24}  name ="terms"/>
                    <Button label={36}  name ="terms"/>
                    <Button label={48}  name ="terms"/>
                    <Button label={72}  name ="terms"/>
                    <Button label={84}  name ="terms"/>
                </div>
            </div>
            ) :
            (
            <div className="row">
                <div>{this.props.title}</div>
                <div className="collection">
                    <Button label={600} name ="credit"/>
                    <Button label={650}  name ="credit"/>
                    <Button label={700}  name ="credit"/>
                    <Button label={750}  name ="credit"/>
                    <Button label={800}  name ="credit"/>
                    <Button label={850}  name ="credit"/>
                    <Button label={900}  name ="credit"/>
                </div>
            </div>
            );
    }
}