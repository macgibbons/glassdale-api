console.log("****  CriminalProvider Module code ****");

let criminals = []

export const useCriminals = () => {
    return criminals
}

export const getCriminals = () => {
    console.log("***I am going to fetch the data***");
    return fetch("http://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.log("***I have the data***");
                // console.table(parsedCriminals)
                criminals = parsedCriminals.slice()
            }
        )
}

