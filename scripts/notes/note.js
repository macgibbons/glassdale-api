export const NoteCardComponent = (note) => {
   return `<div class="note__card">
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
