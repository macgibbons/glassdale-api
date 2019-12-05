const CriminalComponent = (criminal) => {
    console.log("****I am the Item component****")
    return `
    <section class="criminal__card">
    <header class="criminal__header">
        <div>${criminal.name}</div>
    </header>
    <div class="criminal__info">
        <div class="age">Age: ${criminal.age}</div>
        <div class="conviction">Crime: ${criminal.conviction}</div>
        <div class="date__start">Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
        <div class="date__start">End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
    </div>
    </section>
    `
}



export default CriminalComponent