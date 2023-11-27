// hide labels message
const imputs = document.querySelectorAll('.field__input').forEach(element => {
    element.addEventListener('input', () => {
        if (element.value <=0 ) {
            element.previousElementSibling.classList.remove('inactive');
    }
    else {
        element.previousElementSibling.classList.add('inactive');
    }
})
});