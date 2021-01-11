import React,{Component} from 'react';

export default class Counter extends Component {
    render() {
        let bd='';
        if (this.props.count===2){
            bd=birthday;
        }
        return <div>Counter {this.props.count} {bd}</div>
    }
}

export const birthday='10/05/1982';