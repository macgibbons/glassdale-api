
export const saveNote = note => {
    fetch('http://localhost:8080/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
}

const NoteFormComponent = () => {

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {

            // Make a new object representation of a note
            const newNote = {
                // Key/value pairs here
            }

            // Change API state and application state
            saveNote(newNote)
        }
    })

}
