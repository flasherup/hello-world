import React, { Component } from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';

export default class Sorter extends Component {
    render() {
        console.log('songs', this.props.songs);
        return (
            <Row>
                <Col className='d-flex justify-content-center'>
                    <ButtonGroup>
                        <Button onClick={()=>this.sortByArtist()}>Sort by artist</Button>
                        <Button onClick={()=>this.sortBySong()}>Sort by song</Button>
                        <Button onClick={()=>this.sortByDefault()}>Sort by default</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        );
    }

    sortByArtist() {
        const sorted = [...this.props.songs];
        sorted.sort((a,b)=>a.artist - b.artist);
    }

    sortBySong() {
        const sorted = [...this.props.songs];
        sorted.sort((a,b)=>a.song - b.song);
    }

    sortByDefault() {
        const sorted = [...this.props.songs];
    }
}