import { useNotes, getNotes, deleteNote } from "./noteDataProvider.js";
import { NoteCardComponent } from "./note.js";


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".noteContainer")

const NoteCardPrinter = () => {
    const notes = useNotes()
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "showNotes"){
            const render = notes => 
            getNotes().then(

            contentElement.innerHTML = `
                
                ${
                    notes.map(
                        (currentNote) =>  NoteCardComponent(currentNote)).join("")
                    }
                    `
                    )
                    render(notes)
                }
            } )
         eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteNote--")) {
            const [prefix, id] = clickEvent.target.id.split("--")
    
            /*
                Invoke the function that performs the delete operation.
    
                Once the operation is complete you should THEN invoke
                useNotes() and render the note list again.
            */
           const message = new CustomEvent("deleteNoteClicked", {
            detail: {
                noteId: id
            }
        })
        eventHub.dispatchEvent(message)

           deleteNote(id).then( () => render(notes) )
        }
    })

}

export default NoteCardPrinter
