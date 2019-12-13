import { useNotes, deleteNote, getNotes } from "./noteDataProvider.js";
     
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".interviewContainer")

const NoteCardPrinter = () => {
    
        // this function uses the custom event "showNoteButtonClicked" and envokes the render function,
        // which display's the notes on the DOM
        eventHub.addEventListener("showNoteButtonClicked", clickEvent => {
            getNotes().then(
                () => {
                    const notes = useNotes()
                    render(notes)
                })
        })
        
        // this function listens for a click on the "delete" button 
        eventHub.addEventListener("click", clickEvent => {
            const notes = useNotes()
            // if the id of the button starts with "deleteNote--" then it performs the next function
            if (clickEvent.target.id.startsWith("deleteNote--")) {
                
                // this creates an array and .split takes the "deleteNote" and "#" value from the id and splits it 
                // into separate variables
                const [prefix, id] = clickEvent.target.id.split("--")
                
                // this creates a new custom event "deleteNoteClicked" where it builds an object containing the ID of  
                // the button clicked so we now can use that info to delete that specific note
                const message = new CustomEvent("deleteNoteClicked", {
                    detail: {
                        noteId: id
                    }
                })

    // this dispatches the custom event message to the eventHub
    eventHub.dispatchEvent(message)
    
    // this envokes the deleteNote function and re-renders the notes
    deleteNote(id).then( () => render(notes) )
     
    }
    })
}


const render = (notesCollection) => {
    getNotes().then(
        contentTarget.innerHTML = notesCollection.map(
            (note) => {
                return `
                <div class="note__card">
                <h2 class="notecard__header">note | <span>${new Date(note.date).toLocaleDateString('en-US')}.</h2>
                <div class="note__details">
                <div>Criminal:  ${note.criminal}</div>
                <div>note: ${note.note}</div>
                <button id="deleteNote--${note.id}">Delete</button>
                </div>
                </div>
                `
            }
            ).join("")
            )
}
export default NoteCardPrinter
