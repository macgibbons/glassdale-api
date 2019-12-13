import { useWitnesses } from "./witnessProvider.js";
import witnessComponent from "./witnesses.js";
import CriminalListComponent from "../criminals/CriminalList.js";


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")


const showWitnesses = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "witness__button"){
            const witnesses = useWitnesses()
            console.log("you clicked to show witnesses")
                contentElement.innerHTML = `
            <section class="witnesses">
            <div class="content__title"> Witness| <span> statements.</span> </div>
                ${
                    witnesses.map(
                    (currentWitness) => 
                        witnessComponent(currentWitness)
                    
                ).join("")}
                
                </section>
                `
                    
        }
    } )

    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "witenessClose__button"){
            console.log("you clicked to close")
                CriminalListComponent()
                    
        }
    } )

}


export default showWitnesses