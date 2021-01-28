import React, { Component } from 'react';
import {Row, Col, Button, ListGroup} from 'react-bootstrap';
import { connect } from 'react-redux';

import { deleteSong } from '../actions'

import Sorter from './Sorter';


class SongsList  extends Component {
    render() {
        const items = this.listFromArray(this.props.songs);
        return (
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Sorter songs={ this.props.songs } />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGroup>
                            { items }
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
      )
    }

    listFromArray(songs) {
        const listItems = songs.map((song, index)=>{
            return (
                <ListGroup.Item key={`songKey${ index }`}>
                    <Row>
                        <Col>
                            {`${ index + 1 }: ${ song.artist }, ${ song.song }`}
                        </Col>
                        <Col>
                            <Button variant='outline-danger' onClick={()=>this.props.deleteSDong(index)}>Delete</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            )
        });
        return listItems;
    }
}

const mapStateToProps = (state) => ({
        songs: state.songs
    })

const mapDispatchToProps = dispatch => ({
    deleteSDong: index=>dispatch(deleteSong(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
