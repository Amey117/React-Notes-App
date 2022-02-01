import { Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Notecard from '../components/Notecard';
import Masonry from 'react-masonry-css';
import '../index.css'

function Notes() {
    const [notes, setnotes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then((response) => response.json())
            .then((data) => { setnotes(data) })
    }, [])
    const handledel = (id) => {

        const newnotes = notes.filter((note) => {
            return (note.id !== id)
        })
        const url = `http://localhost:8000/notes/${id}`
        fetch(url, { method: 'DELETE' })
            .then(() => { alert("successfully deleted a note") })
        setnotes(newnotes)

    }
    const breakpoints = {
        default:3,
        1100:2,
        700:1
    }
    return (
        <div>
            <Container >
                
                    <Masonry breakpointCols={breakpoints}  className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {notes.map((note) => {
                            return (<div item key={note.id}><Notecard del={handledel} note={note} ></Notecard></div>)
                        })}
                    </Masonry>
                
            </Container>

        </div>

    );
}

export default Notes;