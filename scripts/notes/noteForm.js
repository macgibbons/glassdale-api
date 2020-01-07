import { saveNote, useNotes, editNote } from "./noteDataProvider.js";
const contentTarget = document.querySelector(".noteFormContainer")
const contentElement = document.querySelector(".noteContainer")
const eventHub = document.querySelector(".container")

const NoteFormBuilder = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const noteToBeEdited = event.detail.noteId

        const allNotesArray = useNotes()

        const theFoundedNote = allNotesArray.find(
            (currentNoteObject) => {
                return currentNoteObject.id === parseInt(noteToBeEdited, 10)
            }
        )

        document.querySelector("#note-id").value = theFoundedNote.id
        document.querySelector("#noteInput").value = theFoundedNote.note
        document.querySelector("#criminal__form").value = theFoundedNote.criminal
    })
    // this function makes the "save note" button save to the note.json API
    eventHub.addEventListener("click", clickEvent => {
        
        if (clickEvent.target.id === "saveNote") {

            const hiddenInputValue = document.querySelector("#note-id").value

            // If so, edit the note with a PUT operation
            if (hiddenInputValue !== "") {
                const editedNote = {
                    id: parseInt(document.querySelector("#note-id").value, 10),
                    note: document.querySelector("#noteInput").value,
                    criminal: document.querySelector("#criminal__form").value,
                    date: Date.now()
                }

                editNote(editedNote).then(() => {
                    console.log("note has been edited");
                    
                    eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited"))
                })
            } else {
                console.log("you clicked the note save button");
                
                // this is creating a new object for the note you are saving to live in
                const noteText= document.querySelector("#noteInput").value
                const noteDate= Date.now()
                const noteCriminal= document.querySelector("#criminal__form").value
    
                const noteObjectToSave = {
                    note: noteText,
                    date: noteDate,
                    criminal: noteCriminal
                }
    
                // envoking savenote is saving noteObjectToSave to the API
                saveNote(noteObjectToSave).then(
                    () => {
                        const message = new CustomEvent("noteCreated")
                        eventHub.dispatchEvent(message)
                    }
                )
            }
        }
    })
    // this function makes the "hide notes" button remove the notes from the DOM
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "hideNotes"){
            console.log("you clicked the note hide button");
                contentElement.innerHTML = ``
                    
        }
    } )
    // this function makes the "show notes" button display all of the notes on the DOM
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "showNotes"){
            console.log("you clicked the note show button")
            const message = new CustomEvent("showNoteButtonClicked")
                eventHub.dispatchEvent(message)
            }
        })

    // this function renders the HTML for the Note form
    const render = () => {
        contentTarget.innerHTML = `
    
        <fieldset>
         <input type="hidden" id="note-id"/>
            <label for="Criminal">Criminal:</label>
            <input placeholder="the criminal..." type="text" name="criminal" id="criminal__form">
        </fieldset>
        <fieldset>
            <textarea placeholder="notes here..." id="noteInput" rows="10" cols="50"></textarea>
        </fieldset>
        <button id="saveNote">save</button>
        <button id="showNotes">show notes</button>
        <button id="hideNotes">hide notes</button>
        `

    }
        render()
}

export default NoteFormBuilder