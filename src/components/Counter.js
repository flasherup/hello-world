import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component{
    render() {
        return <div>Counter { this.props.count }</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.songs.length
    }
}

export default connect(mapStateToProps)(Counter);