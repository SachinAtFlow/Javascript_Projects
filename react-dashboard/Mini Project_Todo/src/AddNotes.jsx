import React from "react";
import { useState } from "react";
function AddNotes() {
    const [input, setInput] = useState("");
    const [notes, setNotes] = useState([]);
    
    //Adding element to the Card
    function addNote() {
        if (input.trim() === "") return;
        setNotes([...notes, input]);
        setInput("");
    }

    //Deleting element from the Card on clickin to X
    function delNote(indexToDelete) {
        {
            setNotes(notes.filter((item, index) => index !== indexToDelete)
            )
        }
    }

    //Reset button
    function resetNote() {
        setNotes([]);
    }

    //AddNotes function return statement
    return <div className="mt-5 m-auto text-white ">
        <input
            type="text"
            placeholder="Enter a Note..."
            className="border-2 rounded-xl p-1 mb-5"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    addNote();
                }
            }} />
        <button
            className="cursor-pointer w-15 ml-5 font-semibold border-2 p-1 rounded-xl bg-blue-500"
            onClick={addNote}>Add</button>
        <button
            className="cursor-pointer w-15 ml-5 font-semibold border-2 p-1 rounded-xl bg-blue-500"
            onClick={resetNote}>Reset</button>

        <div className="max-h-60 overflow-y-scroll">
            {notes.map((item, index) => (
                <p key={index} className="flex justify-between mb-1 bg-white rounded-sm p-0.5 text-black">{item} <button onClick={() => delNote(index)} className="text-red-500 font-bold p-0.5 mr-1 ">✕</button></p>
            ))}
        </div>

    </div>

}
export default AddNotes;