/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionsDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()

    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
       let convictionOption = convictions.sort().map(
           conviction => `<option>${conviction}</option>`
       )
        contentTarget.innerHTML = 
         `   <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictionOption}
            
            </select>
        `  
    }



    render(convictions)
}

export default ConvictionSelect