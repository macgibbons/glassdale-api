import OfficerComponent from "./officers.js";
import { useOfficers } from "./OfficerProvider.js";

const contentElement = document.querySelector(".officersContainer")

const OfficerListComponent = () => {
    
    
    const officers = useOfficers()
    console.log("***I AM THE LIST COMPONENT***")
    

    contentElement.innerHTML += `
    <header class="content__header">
    <div class="content__title"> officers </div>
</header>
    ${
            officers.map(
                (currentOfficer) =>  OfficerComponent(currentOfficer)).join("")
    }
    `
}

export default OfficerListComponent
