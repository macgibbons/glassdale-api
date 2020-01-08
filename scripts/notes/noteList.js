import { useNotes, deleteNote, getNotes } from "./noteDataProvider.js";
     
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteContainer")

const NoteCardPrinter = () => {

    eventHub.addEventListener("noteHasBeenEdited", event => {
       renderNotesAgain()
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editNote--")) {
            
            const [deletePrefix, noteId] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editButtonClicked", {
                detail: {
                    noteId: noteId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }

        if (clickEvent.target.id.startsWith("deleteNote--")) {
            const [deletePrefix, noteId] = clickEvent.target.id.split("--")

            deleteNote(noteId).then(
                () => {
                    const theNewNotes = useNotes()
                    render(theNewNotes)
                }
            )
        }
    })

    const renderNotesAgain = () => {
  
        const allTheNotes = useNotes()
        render(allTheNotes)

    }

    eventHub.addEventListener("noteCreated", event => {
        renderNotesAgain()
    })

    eventHub.addEventListener("showNoteButtonClicked", event => {
        renderNotesAgain()
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
    deleteNote(id).then( 
        () => {
            const newNotes=useNotes()
            render(newNotes) })
     
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
                <button id="editNote--${note.id}">Edit</button>
                </div>
                </div>
                `
            }
            ).join("")
            )
}
export default NoteCardPrinter

