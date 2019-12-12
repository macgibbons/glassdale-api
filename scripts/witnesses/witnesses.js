const witnessComponent = (witness) => {
    return `
        <section class="witness__card">
        <header class="witness__header">
        <div>${witness.name}</div>
        </header>
        <div class="witness__info">
            <img src="/images/witness.svg" alt="icon of a witness" class="witness__icon">   
            <div class="witness"> "${witness.statements}"</div>
        <div>
        </section>
    `
}

export default witnessComponent