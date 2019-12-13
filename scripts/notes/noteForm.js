import { saveNote } from "./noteDataProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")
const contentElement = document.querySelector(".interviewContainer")
const eventHub = document.querySelector(".container")

const NoteFormBuilder = () => {

    // this function makes the "save note" button save to the note.json API
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {

            console.log("you clicked the note save button");
            
            // this is creating a new object for the note you are saving to live iin
            const noteText= document.querySelector("#noteInput").value
            const noteDate= Date.now()
            const noteCriminal= document.querySelector("#criminal__form").value

            const noteObjectToSave = {
                note: noteText,
                date: noteDate,
                criminal: noteCriminal
            }

            // envoking savenote is saving noteObjectToSave to the API
            saveNote(noteObjectToSave)
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
            <label for="Criminal">Criminal:</label>
            <input type="text" name="criminal" id="criminal__form">
        </fieldset>
        <fieldset>
            <textarea id="noteInput" rows="10" cols="50"></textarea>
        </fieldset>
        <button id="saveNote">save</button>
        <button id="showNotes">show notes</button>
        <button id="hideNotes">hide notes</button>
        `

    }
        render()
}

export default NoteFormBuilder