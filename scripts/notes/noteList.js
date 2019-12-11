// import OfficerComponent from "./officers.js";
// import { useOfficers } from "./OfficerProvider.js";
import { useNotes } from "./noteDataProvider.js";
import { NoteCardComponent } from "./note.js";

const contentElement = document.querySelector(".noteContainer")

const NoteCardPrinter = () => {
    
    
    const notes = useNotes()
    

    contentElement.innerHTML += `
    
    ${
            notes.map(
                (currentNote) =>  NoteCardComponent(currentNote)).join("")
    }
    `
}

export default NoteCardPrinter
