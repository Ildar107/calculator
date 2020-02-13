import React, {Component} from 'react';
import Infocard from './Infocard'
export default class Info extends React.Component {
    render() {
        return (
            <div className="info">
                <Infocard name="MSRP" value="$50000"/>
                <Infocard name="Vehicle name" value="BMW"/>
                <Infocard name="Monthly payment" value="$3003"/>
                <Infocard name="Taxes" value="$2323"/>
                <Infocard name="Dealer name" value="Somebody"/>
                <Infocard name="Dealer phone number" value="8-999-777-82-78"/>
                <Infocard name="Dealer rating" value="10"/>
            </div>
            );
    }
}