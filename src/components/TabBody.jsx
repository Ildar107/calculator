import React, {Component} from 'react';
import InputItem from './InputItem';
import ButtonRow from './ButtonRow';
import SelectItem from './SelectItem';
export default class TabBody extends React.Component {
    render() {
        return this.props.tab === 1 
            ? (<div className="tab-body">
                <InputItem label="Down Payment" value="0" />
                <InputItem label="Trade-In" value="0" />
                <InputItem label="APR" value="0" />
                <InputItem label="Post Code" value="0" />
                <ButtonRow title="Terms:"  count={6}/>
                <ButtonRow title="Credit Score:" count={7} />
                </div>)
            :(<div className="tab-body">
                <InputItem label="Down Payment" value="0" />
                <InputItem label="Trade-In" value="0" />
                <InputItem label="Post Code" value="0" />
                <SelectItem label="Terms" options={[24,36,48]} default={36}/>
                <SelectItem label="Mileages" options={[10000,12000,15000]} default={12000}/>
                <SelectItem label="Credit Score" options={Array.from({length: 7}).map((x,i) => 600 + 50*i)} default={750}/>
                </div>)

            ;
    }
}