import React, { Component } from 'react';

export default class Counter extends Component{
    render() {
        console.log('props:', this.props)
        return <div>Counter { this.props.count }</div>;
    }
}
