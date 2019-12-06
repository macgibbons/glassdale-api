const OfficerComponent = (officer) => {
    return `
        <section class="officer__card">
        <img src="/images/police.svg" alt="icon of a police officer" class="officer__icon">   
            <div class="officer"> Officer ${officer}</div>
        </section>
    `
}

export default OfficerComponent
