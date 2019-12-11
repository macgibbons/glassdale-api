import { useCriminals } from "./CriminalDataProvider.js";
import InterviewComponent from "./interview.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".interviewContainer")

const interviewAssociates = () => {
    const criminals = useCriminals()
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.classList.contains("interview__button")){

            contentTarget.innerHTML = `

            ${  
                criminals.map(
                    (currentCriminal) =>  InterviewComponent(currentCriminal)).join("")
                }

            `
        }
    } )
}

export default interviewAssociates

// const currentCriminal = () => {

// }