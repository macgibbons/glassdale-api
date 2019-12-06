import {
    useCriminals
} from "./CriminalDataProvider.js";
import CriminalComponent from "./Criminals.js";

const eventHub = document.querySelector(".container")

// const CriminalList = () => {
//     // Load the application state to be used by this component
//     const appStateCriminals = useCriminals()

//     // What should happen when detective selects a crime?
//     eventHub.addEventListener('crimeSelected', event => {
//         // You remembered to add the id of the crime to the event detail, right?
//         if ("crimeId" in event.detail) {
//             /*
//                 Filter the criminals application state down to the people that committed the crime
//             */
//             const matchingCriminals = appStateCriminals.filter()

//             /*
//                 Then invoke render() and pass the filtered collection as
//                 an argument
//             */
//         }
//     })

//     ...
// }

// ConvictionSelect



////
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

}


export default CriminalListComponent