import React, { Component } from 'react';
import {Row, Col, Button, ListGroup} from 'react-bootstrap';

export default class SongsList  extends Component {
    render() {
        console.log( "Songs", this.props )
        return (
        <ListGroup>
            {this.listFromArray(this.props.songs)
            }
        </ListGroup>
      )
    }

    onDelete(index) {
        this.props.onDelete(index)
    }

    listFromArray(songs) {
        const listItems = songs.map((song, index)=>
        (<ListGroup.Item key={`songKey${ index }`}>
                <Row>
                    <Col>
                        {`${ index + 1 }: ${ song.artist }, ${ song.song }`}
                    </Col>
                    <Col>
                        <Button variant='outline-danger' onClick={()=>this.onDelete(index)}>Delete</Button>
                    </Col>
                </Row>
            </ListGroup.Item>));
        return listItems;
    }
}
