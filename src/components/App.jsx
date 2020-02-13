import React, {Component} from 'react';
import Info from './Info'
import TabBody from './TabBody'

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {tab: 1, class1: " tabs__item tabs__item-selected",  class2: "tabs__item"};
        this.tabClick = this.tabClick.bind(this);
    }
    render() {
        return (
        <div className="app">
            <div className="tabs-panel">
                <div className="tabs-panel__tabs">
                    <div className={this.state.class1} onClick={this.tabClick}>Loan</div>
                    <div className={this.state.class2} onClick={this.tabClick}>Lease</div>
                </div>
                <div className="tabs__body">
                    <TabBody tab={this.state.tab}/>
                </div>
            </div>
            <Info />
        </div>);
    }

    tabClick(s) {
        if(s.target.innerText === "Loan" && this.currentTab !== 1) {
            this.setState({tab: 1, class1: " tabs__item tabs__item-selected",  class2: " tabs__item"});
            this.currentTab = 1;
        }

        if(s.target.innerText === "Lease" && this.currentTab !== 2) {
            this.setState({tab: 2, class2: " tabs__item tabs__item-selected",  class1: " tabs__item"});
            this.currentTab = 2;
        }
    }

}