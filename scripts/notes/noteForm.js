import { saveNote } from "./noteDataProvider.js";

const eventHub = document.querySelector(".container")


const NoteFormBuilder = () => {

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {

            // Make a new object representation of a note
            console.log("you clicked the note save button");
            
            const noteText= document.querySelector("#noteInput").value
            const noteDate= Date.now()
            // document.querySelector("#note__date").value
            const noteCriminal= document.querySelector("#criminal__form").value

            const noteObjectToSave = {
                note: noteText,
                date: noteDate,
                criminal: noteCriminal
            }

            console.log(noteText, noteDate, noteCriminal)


            const newNote = new CustomEvent ("noteSaved", {
               detail: {
                   note: noteObjectToSave
               }
            
            })
            eventHub.dispatchEvent(newNote)
            // Change API state and application state
        
        }
    })

    eventHub.addEventListener("noteSaved", (evt) => {
            const noteObject = evt.detail.note
            saveNote(noteObject)
    }
    )
}

export default NoteFormBuilder