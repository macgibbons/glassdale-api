const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {
    const render = () => {
        contentTarget.innerHTML = `
        
        <fieldset>
            <label for="note__date">Date:</label>
            <input type="date" name="note__date" id="note__date">
        </fieldset>

        <fieldset>
            <label for="Criminal">Criminal:</label>
            <input type="text" name="criminal" id="criminal__form">
        </fieldset>
        <fieldset>
            <textarea id="noteInput" rows="10" cols="50"></textarea>
        </fieldset>
        <button id="saveNote">save</button>
        `
    }

    render()
}

export default NoteFormComponent


export const NoteCardComponent = (note) => {
   return `<div class="note__card">
            <h2 class="notecard__header">note | <span>${new Date(note.date).toLocaleDateString('en-US')}.</h2>
            <div class="note__details">
            <div>Criminal:  ${note.criminal}</div>
            <div>note: ${note.note}</div>
            </div>
            </div>
   `
}
