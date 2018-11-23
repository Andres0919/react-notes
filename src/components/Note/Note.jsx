import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
    constructor(props){
        super(props);
        this.noteId = props.noteId;
        this.noteContent = props.noteContent;
    }

    handleRemove(id){
        const res = window.confirm('¿Esta seguro de eliminar esta nota?');
        if(res){
            this.props.removeNote(id);
        }
    }

    render() {
        return(
            <div className="Notes">
                <span onClick={() => this.handleRemove(this.noteId)}>&times;</span>
                <p>{this.noteContent}</p>
            </div>
        )
    }
}

export default Note;