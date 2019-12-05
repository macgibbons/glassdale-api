import {  useCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./Criminals.js";

const contentElement = document.querySelector(".criminalsContainer")

const CriminalListComponent = () => {
    
    
    const criminals = useCriminals()
    console.log("***I AM THE LIST COMPONENT***")
    

    contentElement.innerHTML += `
    ${
            criminals.map(
                (currentCriminal) =>  CriminalComponent(currentCriminal)).join("")
    }
    `
}


export default CriminalListComponent


