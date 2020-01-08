const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filter__button")


// we need to establish blank variables for both crime and officers in the highest scope
let crime = null
let officer = null

const FilterButton = () => {
    eventHub.addEventListener("crimeSelected", event => {
        crime = event.detail.crime
    })

    eventHub.addEventListener("officerSelected", event => {
        crime = event.detail.officerName
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "filterButton") {
            const message = new CustomEvent("filterClicked", {
                detail: {
                    officer: officer,
                    crime: crime
                }
            })

            eventHub.dispatchEvent(message)
        }
    })
    const render = () => {
        contentTarget.innerHTML = `<button id="filterButton">Filter</button>`
    }

    render()
}

export default FilterButton