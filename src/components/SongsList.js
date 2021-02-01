import React, { Component } from 'react';
import {Row, Col, Button, ListGroup} from 'react-bootstrap';
import { connect } from 'react-redux';

import { deleteSong, downloadJSON } from '../actions'

import Sorter from './Sorter';

import '../css/songsList.css';

const CLASS_SONGS_LIST = 'songs-list';
const CLASS_DELETE_BTN = 'songs-list-delete-btn'


class SongsList  extends Component {
    render() {
        let downloadResId = '';
        if (this.props.loadedJSON) {
            downloadResId = this.props.loadedJSON.title;
        }

        let downloadResError = '';
        if (this.props.loadedJSONError) {
            downloadResError = this.props.loadedJSONError;
        }

        const items = this.listFromArray(this.props.songs);
        return (
            <Row className={ CLASS_SONGS_LIST }>
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
                    <Row>
                        <Col>
                            <Button onClick={ ()=>this.downloadJSON() } > Download </Button>
                            <br />
                            { downloadResId }
                            { downloadResError }
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
                        <Col className={ CLASS_DELETE_BTN }>
                            <Button variant='outline-danger' onClick={()=>this.props.deleteSDong(index)}>Delete</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            )
        });
        return listItems;
    }

    downloadJSON() {
        this.props.downloadJSON('https://jsonplaceholder.typicode.com/todos/1');
    }
}

const mapStateToProps = (state) => ({
        songs: state.songs,
        loadedJSON: state.loadedJSON,
        loadedJSONError: state.loadedJSONError,
    })

const mapDispatchToProps = dispatch => ({
    deleteSDong: index=>dispatch(deleteSong(index)),
    downloadJSON: url=>dispatch(downloadJSON(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
