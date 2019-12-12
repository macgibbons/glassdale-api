let witnesses = []

export const useWitnesses = () => {
    return witnesses
}

export const getWitnesses = () => {
    return fetch("http://criminals.glassdale.us/Witnesses")
        .then(response => response.json())
        .then(
            parsedWitnesses => {
                console.table(parsedWitnesses)
                witnesses = parsedWitnesses.slice()
            }
        )
}