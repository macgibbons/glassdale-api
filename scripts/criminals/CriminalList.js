import { useCriminals, getCriminalsByOfficer } from "./CriminalDataProvider.js";
import CriminalComponent, { criminalsCrime } from "./Criminals.js";

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")

const CriminalListComponent = () => {

    const criminals = useCriminals()

    eventHub.addEventListener("filterClicked", event => {
        const crimeName = event.detail.crime
        const officerName = event.detail.officer
        const filteredCriminals = criminals.filter(
            (individualCriminal) => {
                if (individualCriminal.conviction === crimeName) {
                    return individualCriminal
                }
            }
        )
        .filter(criminal => {
            if (criminal.arrestingOfficer === officerName) {
                return criminal
            }
        })

        render(filteredCriminals)
    })

    // this is listening for a custom event "crimeSelected" in the dropdown
    // eventHub.addEventListener("crimeSelected", event => {

    //     // this is creating a variable that stores the crime that was selected 
    //     const crime = event.detail.crimeID

    //     // defining a function that 
    //     const matchingCriminals = criminals.filter(
    //         (currentCriminal) => {
    //             if (currentCriminal.conviction === crime) {
    //                 return currentCriminal
    //             }
    //         }

    //     )
        
    //     render(matchingCriminals)
    // })

    // // this listens for the officer selected from the drop down
    // eventHub.addEventListener('officerSelected', event => {
    //     if ("officerName" in event.detail) {
    //         // if there is no officer selected it will just render the whole criminal list
    //         if (event.detail.officerName === "0") {
    //             render(appStateCriminals)
    //         } else {
    //             // else it will perform the getCriminalsByOfficer function using that officer 
    //             // name as a variable and then re render the criminals after being filtered
    //             const filteredCriminals = getCriminalsByOfficer(event.detail.officerName)
    //             render(filteredCriminals)
    //         }
    //     }
    // })
    // this function listens for a click, specifically if the button id starts with "associates--"
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("associates--")) {
            console.log("you clicked to interview an associate");
            
            // here we are splitting the ID so we can use the unique number
            const [prefix, id] = clickEvent.target.id.split("--")

            // this is creating a message of that number so we can use it in other modules
            const message = new CustomEvent("associateButtonClicked", {
                detail: {
                    criminalId: id
                }
            })
            // this is sending it to the event hub
            eventHub.dispatchEvent(message)
        }
    })


    let render = criminalCollection => {
        // const crime = event.detail.crimeID
        // contentElement.innerHTML = ""
        contentElement.innerHTML =
            `
            <section class="criminals">
            <div class="content__title">  Glassdale PD | <span>criminals.</span> </div>
            ${  
            criminalCollection.map(
                (currentCriminal) =>  CriminalComponent(currentCriminal)).join("")
            }
            </section>
            <div class="interviewContainer"></div>
            `
    
    }
    render(criminals)
}


export default CriminalListComponent