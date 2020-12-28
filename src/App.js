import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Button, Form} from 'react-bootstrap';
import AddForm from './components/AddForm';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songs:[],
            editable:{index: -1, song:'', artist:''}
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Play List</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddForm onAddSong={values=>this.onAddSong(values)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>My songs list:</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {this.listFromArray(this.state.songs)}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }

    listFromArray(songs) {
        const listItems = songs.map((song, index)=>{
            console.log(this.state.editable.index);
            if (index === this.state.editable.index){
            return <ListGroup.Item key={`${ song.artist }${ song.song }`}>
            <Row>
                <Col>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control 
                                onChange={event=>this.onChangeArtist(event)}
                                value={song.artist} 
                                />
                            </Col>
                            <Col>
                                <Form.Control 
                                onChange={event=>this.onChangeSong(event)}
                                value={song.song}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col>
                    <Button variant='outline-danger' onClick={()=>this.onSave(index)}>Save</Button>
                </Col>
            </Row>
        </ListGroup.Item>
        }
            return <ListGroup.Item key={`${ song.artist }${ song.song }`}>
                <Row>
                    <Col>
                        {`${ index + 1 }: ${ song.artist }, ${ song.song }`}
                    </Col>
                    <Col>
                        <Button variant='outline-danger' onClick={()=>this.onEdit(index)}>Edit</Button>
                        <Button variant='outline-danger' onClick={()=>this.onDelete(index)}>Delete</Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        });
        return listItems;
    }

    onAddSong(values) {
        this.setState({songs:[...this.state.songs, values]});
    }

    onChangeSong(event){
        this.setState({song: event.target.value});
    }
  
    onChangeArtist(event) {
        this.setState({artist: event.target.value});
    }

    onEdit(index){
        this.setState({editable:{index, artist:'', song:''}});
    }
    

    onDelete(index) {
        const filtered = this.state.songs.filter((_, i) => {
            return i !== index;
        })
        this.setState({songs:[...filtered]});
    }

    onSave(values) {
        console.log(values);
        this.props.onAddSong({...this.state});
        this.setState({
            artist:'',
            song:'' 
         });
    }
}

export default App;