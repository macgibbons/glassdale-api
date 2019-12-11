const InterviewComponent = (criminal) => {
    return `
    <section class="interview__card">
    <header class="interview__header">
        <div>${criminal.known_associates.map(
            (ka) => {
                return ka.name
            }
        ).join(" ")}</div>
    </header>
    <div class="interview__info">
    <img class="criminal__icon" src="/images/interview.svg" alt="icon of a burlar">
        <div class="conviction">Alibi: ${criminal.known_associates.map (
            (ka) => {
                return ka.alibi
            }
        ).join(" ")}</div>
        <button class="interviewClose__button">close</button>
    </div>
    </section>
    `
}



export default InterviewComponent