import CriminalListComponent from "../criminals/Criminals.js";

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".interviewContainer")

const interviewHider = () => {
    eventHub.addEventListener("click", clickEvent => {
        const criminals = useCriminals()
        if(clickEvent.target.id === "interviewClose__button"){
            console.log("you clicked to close")
                contentElement.innerHTML = 
                CriminalListComponent()
                    
        }
    } )
}

export default interviewHider
