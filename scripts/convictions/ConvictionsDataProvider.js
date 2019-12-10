console.log("****  ConvictionProvider Module code ****");

let convictions = []

export const useConvictions = () => {
    return convictions.slice()
}

export const getConvictions = () => {
    console.log("***I am going to fetch the data***");
    return fetch("http://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => {
                console.log("***I have the data***");
                console.table(parsedConvictions)
                convictions = parsedConvictions.slice()
            }
        )
}
