import { useCriminals } from "../criminals/CriminalDataProvider.js";
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".interviewContainer")


const interviewAssociates = () => {
    // this listens for the custom event
    eventHub.addEventListener("associateButtonClicked", clickEvent => {

        // this gives us the criminal array
        const criminals = useCriminals()

        // this filters out the single criminal that matches the id
        const foundCriminal = criminals.find(
            (singleCriminal) => {
                return singleCriminal.id === parseInt(event.detail.criminalId, 10)
            }
         )
        //  this builds the HTML that will go in by looping the known associates array of the found criminal 
         const alibisHTML = foundCriminal.known_associates.map(
             (singleAssociate) => {
                 return `
            <section class="interview__card">
                    <header class="interview__header">
                        <div>${singleAssociate.name}</div>
                    </header>
                <div class="interview__info">
                    <img class="criminal__icon" src="/images/interview.svg" alt="icon of a burlar">
                    <div class="conviction">Alibi: ${singleAssociate.alibi}</div>
                    <button id="interviewClose__button">close</button>
                </div>
            </section>
            
                  `
                }
            ).join("")

            contentTarget.innerHTML = alibisHTML

            })
            eventHub.addEventListener("click", clickEvent => {
                if(clickEvent.target.id === "interviewClose__button"){
                    console.log("you clicked to close")
                    contentTarget.innerHTML= 
                        ``
                        
                            
                }
            } )
        const render = () => {
            contentTarget.innerHTML= `
            
            `
        }
        render()
}
    
        export default interviewAssociates
        