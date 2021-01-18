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
        sorted.sort((a,b)=>{
            const artistA = a.artist.toUpperCase();
            const artistB = b.artist.toUpperCase();
            return artistA<artistB?-1:1;
        });
        console.log('sorted', sorted);
    }

    sortBySong() {
        const sorted = [...this.props.songs];
        sorted.sort((a,b)=>a.song - b.song);
        console.log('sorted', sorted);
    }

    sortByDefault() {
        const sorted = [...this.props.songs];
        console.log('sorted', sorted);
    }
}