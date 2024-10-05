import Note from "./Note";
import notes from "./notesJSON.json";
  
function Notes(){
    return <div>
    {notes.map(note=>(
        <Note 
            key={note.key}
            title = {note.title}
            description = {note.content}
        />
    ))}
    </div>
}

export default Notes;