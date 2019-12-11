import { useNotes, getNotes } from "./noteDataProvider.js";
import { NoteCardComponent } from "./note.js";


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".noteContainer")

const NoteCardPrinter = () => {
    const notes = useNotes()
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "showNotes"){
            getNotes().then(

                contentElement.innerHTML = `
                
                ${
                    notes.map(
                        (currentNote) =>  NoteCardComponent(currentNote)).join("")
                    }
                    `
                    )
        }
    } )
    

}

export default NoteCardPrinter
