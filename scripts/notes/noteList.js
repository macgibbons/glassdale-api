import { useNotes, getNotes, deleteNote } from "./noteDataProvider.js";
import { NoteCardComponent } from "./note.js";


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".noteContainer")

const NoteCardPrinter = () => {
    const notes = useNotes()
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "showNotes"){
            eventHub.addEventListener("click", clickEvent => {
           if (clickEvent.target.id.startsWith("deleteNote--")) {
               const [prefix, id] = clickEvent.target.id.split("--")
       
       
              const message = new CustomEvent("deleteNoteClicked", {
               detail: {
                   noteId: id
               }
           })
           eventHub.dispatchEvent(message)
   
              deleteNote(id).then( () => render(notes) )
           }
       })
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





}

export default NoteCardPrinter
