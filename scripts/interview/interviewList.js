import InterviewComponent from "./interview.js";
import { useCriminals } from "../criminals/CriminalDataProvider.js";

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
                    contentTarget.innerHTML+= `
                    <div class="content__title"> assosiates | <span>${currentCriminal.name}.</span> </div>
                    <div class="associate__container">
                    ${
                        associates.map(
                        (currentAssociate) => InterviewComponent(currentAssociate)
                    ).join("")} 
                    </div>
                    
                    `
                        
                    }
                 }
                
                )
        }
    } )
}
console.log(associates)
export default interviewAssociates
// const currentCriminal = () => {

// }