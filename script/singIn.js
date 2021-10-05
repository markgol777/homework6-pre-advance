const inputs = ['.input5', '.input6'];
const elem = (selector) => document.querySelector(selector)
function clearInputs () {
    for (let i = 0; i < inputs.length; i++) {
        elem(inputs[i]).value = '';        
    }
}

elem('.btn-singIn').addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('userArr'))
    for (let i = 0; i < user.length; i++) {
            if (user[i].email === elem('.input5').value && user[i].password === elem('.input6').value ) {
            console.log('nice');
            elem('.errorNameLocal').style.display = 'none';
            sessionStorage.setItem('userWhichLoggedIn', JSON.stringify(user[i]));
            elem('.btn-singInLink').href = './singedIn.html';
            clearInputs();
        } else {
            console.log('nice try');
            elem('.errorNameLocal').style.display = 'block';
        }
    }
})