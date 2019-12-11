const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".noteContainer")

const NoteCardHider = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "hideNotes"){

                contentElement.innerHTML = ``
                    
        }
    } )

}

export default NoteCardHider
