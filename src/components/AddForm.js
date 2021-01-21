import React,{Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addSong } from '../actions'

const FIELD_ID_ARTIST = 'artist';
const FIELD_ID_SONG = 'song';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           artist:'',
           song:'' 
        };
    }
    render() {
        return(
            <Form>
                <Form.Group controlId={ FIELD_ID_ARTIST } >
                    <Form.Label>Artist</Form.Label>
                    <Form.Control  
                        onChange={event=>this.onFormChange(event)}
                        value={this.state.artist} 
                    />
                </Form.Group>
                <Form.Group controlId={ FIELD_ID_SONG } >
                    <Form.Label>Song</Form.Label>
                    <Form.Control  
                        onChange={event=>this.onFormChange(event)}
                        value={this.state.song}   
                    />
                </Form.Group>
                <Form.Group >
                    <Button onClick={()=>this.onSubmit()}>Add</Button>
                </Form.Group>
            </Form>
        );
    }

    onSubmit() {
        ///this.props.onAddSong({...this.state});
        this.props.addSong(this.state.artist, this.state.song)
        this.setState({
            artist:'',
            song:'' 
         });
    }

    onFormChange(event) {
        switch(event.target.id) {
            case FIELD_ID_ARTIST: 
                this.setState({artist:event.target.value});
            break;
            case FIELD_ID_SONG:
                this.setState({song:event.target.value});
            break;
            default:
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSong: (artist, song)=>dispatch(addSong(artist, song))
    }
}

export default connect(null, mapDispatchToProps)(AddForm);