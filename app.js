const faqQuestions = document.querySelectorAll('.question');

faqQuestions.forEach(item => {
    const spanToggle = item.querySelector('.question-btn');
    const displayMsg = item.querySelector('.question-text');
    const questionSelector = item.querySelector('.question-selector')

    const clickMe = (event) => {
        displayMsg.classList.toggle('show-text')
        questionSelector.classList.toggle('question-expanded-style')
        // try commenting this out to see if clicking on the
        // arrow works. Instead of clicking on the text.
        event.stopPropagation()
    };

    item.addEventListener('click', clickMe)
    spanToggle.addEventListener('click' , clickMe)
})