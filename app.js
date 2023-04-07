const faqItems = document.querySelectorAll('.FAQ li');

faqItems.forEach(item => {
    const spanToggle = item.querySelector('.span');
    const displayMsg = item.querySelector('.answer');

    const clickMe = () => {
        displayMsg.classList.toggle('show')
    };
    spanToggle.addEventListener('click' , clickMe)
})


