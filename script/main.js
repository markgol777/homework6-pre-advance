let allUsers = [];
const elem = (selector) => document.querySelector(selector);
const inputsNames = ['.input1', '.input2', '.input3', '.input4']
const rexExpArrays = [/^\S{2,14}$/, /^\S{2,14}$/, /\S@\S.\S/, /^\S{2,10}$/]
const errors = ['.errorName', '.errorLastName', '.errorEmailName', '.errorPassName'];
let rexExpArraysI;
let inputsNamesI;

for (let i = 0; i < inputsNames.length; i++) {
    rexExpArraysI = rexExpArrays[i];
    inputsNamesI = inputsNames[i];
    errorsI = errors[i]
}

function clearInputs() {
    setTimeout(() => {
        for (let i = 0; i < inputsNames.length; i++) {
            elem(inputsNames[i]).value = '';

        }
    }, 10);
}

elem('.btn1').addEventListener('click', () => {
    if (rexExpArraysI.test(document.querySelector(inputsNamesI).value) === false) {
        for (let i = 0; i < errors.length; i++) {
            elem(errors[i]).style.display = 'block';        
        }
    } else {
        if (rexExpArraysI.test(document.querySelector(inputsNamesI).value) === true) {
            let currentUser = {
                name: document.querySelector(inputsNames[0]).value,
                lastName: document.querySelector(inputsNames[1]).value,
                email: document.querySelector(inputsNames[2]).value,
                password: document.querySelector(inputsNames[3]).value
            }

            if (localStorage.length > 0 && localStorage.getItem('userArr')) {
                allUsers = JSON.parse(localStorage.getItem('userArr'));
                elem('.errorEmailName').style.display = 'none';
            }
            console.log(localStorage.getItem('userArr'));
            if (!allUsers.some(elem => elem.email === currentUser.email)) {
                allUsers.push(currentUser);
                console.log(allUsers);
                elem('.errorEmailName').style.display = 'none';
            } else {
                elem('.errorEmailName').style.display = 'block';
            }

            localStorage.setItem('userArr', JSON.stringify(allUsers));
            console.log(localStorage.getItem('userArr'));
            clearInputs();
        }
    }
})