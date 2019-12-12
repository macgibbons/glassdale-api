const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".interviewContainer")

const interviewHider = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "interviewClose__button"){
            console.log("you clicked to close")
                contentElement.innerHTML = ``
                    
        }
    } )

}

export default interviewHider