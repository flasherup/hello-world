import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AddForm from './components/AddForm';
import {main} from './components/practice';
import Counter from './components/Counter'
import SongsList from './components/SongsList'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songs:[]
        }
        main();
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
                        <Counter 
                            count={ this.state.songs.length }
                        >
                            Child inside { this.state.songs.length }
                        </Counter>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>My songs list:</h2>
                    </Col>
                </Row>
                <Row>
                   
                    <Col>
                      <SongsList songs={ this.state.songs } onDelete={ index=>this.onDelete(index)}>
                      </SongsList>
                    </Col>

                </Row>
            </Container>
        );
    }
/*
    listFromArray(songs) {
        const listItems = songs.map((song, index)=>(
            <ListGroup.Item key={`songKey${ index }`}>
                <Row>
                    <Col>
                        {`${ index + 1 }: ${ song.artist }, ${ song.song }`}
                    </Col>
                    <Col>
                        <Button variant='outline-danger' onClick={()=>this.onDelete(index)}>Delete</Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        ));
        return listItems;
    }
*/
    onAddSong(values) {
        this.setState({songs:[...this.state.songs, values]});
    }

    onDelete(index) {
        const filtered = this.state.songs.filter((_, i) => {
            return i !== index;
        })
        this.setState({songs:[...filtered]});
    }
}

export default App;
/*
<Col>
<ListGroup  listItems={this.state.songs}>
Child inside {this.state.songs}
</ListGroup>
</Col>*/