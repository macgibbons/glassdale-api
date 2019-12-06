/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionsDataProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    const convictions = useConvictions()
    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("dropdown")){

        const selectedCrime = changeEvent.target.value
        

        const crimes = new CustomEvent ("crimeSelected", {
           detail: {
               crimeID: selectedCrime
           } 
        })
        eventHub.dispatchEvent(crimes)
}
    })

    let convictionOption = convictions.sort().map(
        conviction => `<option>${conviction}</option>`
    )

    const render = convictionsCollection => {
        contentTarget.innerHTML = `
       
            <select class="dropdown" id="crimeSelect">
                <option value="Please select a crime above">Please select a crime...</option>
                ${convictionOption}
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect
    /*
        On the Event Hub, listen for a "change" event. Remember to write
        an `if` condition to make sure that it was the `#crimeSelect`
        element that changed.

        When that event happens, dispatch a custom message to your Event
        Hub so that the criminal list can listen for it and change what
        it renders.
    */


 











// Get a reference to the DOM element where the <select> will be rendered
// const contentTarget = document.querySelector(".filters__crime")

// const ConvictionSelect = () => {
//     // Get all convictions from application state
//     const convictions = useConvictions()

//     const render = convictionsCollection => {
//         /*
//             Use interpolation here to invoke the map() method on
//             the convictionsCollection to generate the option elements.
//             Look back at the example provided above.
// //         */
//        let convictionOption = convictions.sort().map(
//            conviction => `<option>${conviction}</option>`
//        )
//         contentTarget.innerHTML = 
//          `   <select class="dropdown" id="crimeSelect">
//                 <option value="0">Please select a crime...</option>
//                 ${convictionOption}
            
//             </select>
//         `  
//     }



//     render(convictions)
// }

// export default ConvictionSelect