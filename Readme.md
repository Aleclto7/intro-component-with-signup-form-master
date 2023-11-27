# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](https://i.imgur.com/TRPeMQr.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/Aleclto7/intro-component-with-signup-form-master)
- Live Site URL: [GitHub Pages](https://aleclto7.github.io/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to use the required property in the input as well as the autocomplete property.
```html
<input type="password" id="password" required autocomplete="current-password" class="field__input">
```

I learned how to check if my form inputs were valid to activate or deactivate the error messages that the customer will see.
```js
if (element.checkValidity()) {
  element.previousElementSibling.firstElementChild.classList.add('inactive');
  element.classList.remove('field__error');
  element.nextElementSibling.classList.add('inactive');
}
```

### Useful resources

- [Navigate through DOM elements1](https://lenguajejs.com/javascript/dom/navegar-elementos-dom/)
- [Validación de formularios de datos](https://developer.mozilla.org/es/docs/Web/API/HTMLInputElement)

## Author

- Website - [Alexis Calixto](https://pf-aleclto7.netlify.app/)
- Frontend Mentor - [@Aleclto7](https://www.frontendmentor.io/profile/Aleclto7)
- Twitter - [@Alexclto7](https://twitter.com/Alexclto7)
