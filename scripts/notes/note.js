const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {
    const render = () => {
        contentTarget.innerHTML = `
        <h2 class="note__header">Glassdale PD | <span>notes.</span></h2>
        <fieldset>
            <label for="note__date">Date:</label>
            <input type="date" name="note__date" id="note__date">
        </fieldset>

        <fieldset>
            <label for="Criminal">Criminal:</label>
            <input type="text" name="criminal" id="criminal__form">
        </fieldset>
        <fieldset>
            <textarea id="noteInput" rows="10" cols="68"></textarea>
        </fieldset>
        <button id="saveNote">save</button>
        `
    }

    render()
}

export default NoteFormComponent