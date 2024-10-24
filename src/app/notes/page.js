"use client";

import { useState } from "react";
import { ListItem } from "./_components/list-item";
import "./style.css";

export default function Notes() {
    const [note, setNote] = useState("");

    const [notes, setNotes] = useState([]);

    function addNote() {
        setNotes([...notes, note]);

        setNote("");
    }

    function deleteNote(i) {
        var newNotes = [];

        for (var j = 0; j < notes.length; j++) {
            if (j !== i) {
                newNotes.push(notes[j]);
            }
        }

        setNotes(newNotes);
    }

    return (
        <div>
            <input
                type="text"
                value={note}
                onChange={(e) => {
                    setNote(e.target.value);
                }}
            />
            <button onClick={addNote}>Add Note</button>

            <ul>
                {notes.map((note, idx) => {
                    return <ListItem note={note} i={idx} deleteNote={deleteNote} />;
                })}
            </ul>
        </div>
    );
}


// var l1 = [1, 2, 3];

// var l2 = [];

// for (var i = 0; i < l1.length; i++) {
//     l2.push(l1[i] + 1);
// }

// l2 = l1.map((e) => {
//     return e + 1;
// });

// console.log(l2);
