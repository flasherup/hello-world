import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AddForm from './components/AddForm';
import {main} from './components/practice';
import Counter from './components/Counter'
import SongsList from './components/SongsList'


class App extends Component {
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
                        <AddForm/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Counter/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>My songs list:</h2>
                    </Col>
                </Row>
                <Row>
                   
                    <Col>
                      <SongsList onDelete={ index=>this.onDelete(index)}>
                      </SongsList>
                    </Col>

                </Row>
            </Container>
        );
    }

    onDelete(index) {
        /*const filtered = this.state.songs.filter((_, i) => {
            return i !== index;
        })
        this.setState({songs:[...filtered]});*/
    }
}

export default App;
/*
<Col>
<ListGroup  listItems={this.state.songs}>
Child inside {this.state.songs}
</ListGroup>
</Col>*/