import { useCriminals } from "./CriminalDataProvider.js";
import InterviewComponent from "./interview.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".interviewContainer")
let associates = []
const interviewAssociates = () => {
    const criminals = useCriminals()
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.classList.contains("interview__button")){
            console.log(clickEvent.target.id)
            
            criminals.map( (currentCriminal) => {
                
                if(`${currentCriminal.id}` === clickEvent.target.id){
                    associates = currentCriminal.known_associates
                    contentTarget.innerHTML= `${
                        associates.map(
                        (currentAssociate) => InterviewComponent(currentAssociate)
                    ).join("")}`
                        
                    } }
                
                )
        }
    } )
}
console.log(associates)
export default interviewAssociates

// const currentCriminal = () => {

// }