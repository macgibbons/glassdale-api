console.log("****  CriminalProvider Module code ****");

let criminals = []

export const useCriminals = () => {
    return criminals
}


export const getCriminalsByCrime = crime => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.conviction.toLowerCase() === crime.toLowerCase()) {
            return true
        }
        return false
    })
}

export const getCriminalsByOfficer = officerName => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.arrestingOfficer.toLowerCase() === officerName.toLowerCase()) {
            return true
        }
        return false
    })
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

