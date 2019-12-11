const InterviewComponent = (criminal) => {
    return `
    <section class="interview__card">
    <header class="interview__header">
        <div>${criminal.known_associates.name}</div>
    </header>
    <div class="interview__info">
    <img class="criminal__icon" src="/images/interview.svg" alt="icon of a burlar">
        <div class="conviction">Alabi: ${criminal.known_associates.alibi}</div>
        <button class="interviewClose__button">close</button>
    </div>
    </section>
    `
}



export default InterviewComponent