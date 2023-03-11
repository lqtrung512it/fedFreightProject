var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var radioButtons = document.querySelectorAll('input[name="role');
var form = document.querySelector('form');


function showError(message) {
    console.log(message)
}

function showSuccess(message) {
    console.log(message)
}

function checkEmptyError(input) {
    let isEmptyError = false

    if (!input.value) {
        isEmptyError = true
        showError("Empty")
    } 
    return isEmptyError
}

function checkEmail(input) {
    const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/

    let isEmailError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSuccess("Valid Email")
    } else {
        showError("Error Email")
    }

    return isEmailError
}

function checkPassword(input) {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    let isPasswordError = !regexPassword.test(input.value)
    if (regexPassword.test(input.value)) {
        showSuccess("Valid password")
    } else {
        showError("Error password")
    }

    return isPasswordError
}

function checkRadio(input) {
    let selectedRole;
    for (var radioButton of input) {
        if (radioButton.checked) {
            selectedRole = radioButton.value;
            break;
        }
    }
    return selectedRole
}


form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (username) {
        let isEmptyUsernameError = checkEmptyError(username)
    }
    let isEmptyEmailError = checkEmptyError(email)
    let isEmptyPasswordError = checkEmptyError(password)
    if (!isEmptyEmailError) {
        let isEmailError = checkEmail(email)
    }
    if (!isEmptyPasswordError) {
        let isPasswordError = checkPassword(password)
    }
    if (radioButtons) {
        let selectedRole = checkRadio(radioButtons)
    }
})