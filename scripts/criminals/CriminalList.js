import { useCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./Criminals.js";

const eventHub = document.querySelector(".container")


const contentElement = document.querySelector(".criminalsContainer")

const CriminalListComponent = () => {


    const criminals = useCriminals()

    eventHub.addEventListener("crimeSelected", event => {
        const crime = event.detail.crimeID

        const matchingCriminals = criminals.filter(
            (currentCriminal) => {
                if (currentCriminal.conviction === crime) {
                    return currentCriminal
                }
            }

        )
        
        render(matchingCriminals)
    })
    
    let render = criminalCollection => {
        const crime = event.detail.crimeID
        contentElement.innerHTML = ""
        contentElement.innerHTML =
            `
            <section class="criminals">
            <div class="content__title"> ${crime} </div>
            ${  
            criminalCollection.map(
                (currentCriminal) =>  CriminalComponent(currentCriminal)).join("")
            }
            </section>
            `
    
    }
// render(criminals)
}


export default CriminalListComponent