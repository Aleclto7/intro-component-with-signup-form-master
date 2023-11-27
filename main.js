const imputs = document.querySelectorAll('.field__input')
// hide labels message
imputs.forEach(element => {
    element.addEventListener('input', () => {
        if (element.value <=0 ) {
            element.previousElementSibling.classList.remove('inactive');
    }
        else {
        element.previousElementSibling.classList.add('inactive');
    }
})
});
// icon and error message 
const btn = document.querySelector('.form__button').addEventListener('click', () => {
    imputs.forEach(element => {
        if (element.checkValidity()) {
            element.previousElementSibling.firstElementChild.classList.add('inactive');
            element.classList.remove('field__error');
            element.nextElementSibling.classList.add('inactive');
        }
        else {
            element.previousElementSibling.firstElementChild.classList.remove('inactive');
            element.classList.add('field__error');
            element.nextElementSibling.classList.remove('inactive');
        }
    })
})