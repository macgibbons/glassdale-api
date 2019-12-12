const InterviewComponent = (associate) => {
    return `
    <section class="interview__card">
    <header class="interview__header">
        <div>${associate.name}
        
        </div>
    </header>
    <div class="interview__info">
    <img class="criminal__icon" src="/images/interview.svg" alt="icon of a burlar">
        <div class="conviction">Alibi: ${associate.alibi
          }
        </div>
        <button id="interviewClose__button">close</button>
    </div>
    </section>
    `
}



export default InterviewComponent