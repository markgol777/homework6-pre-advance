const elem = (selector) => document.querySelector(selector);
elem('.name').textContent = JSON.parse(sessionStorage.getItem('userWhichLoggedIn')).name;
elem('.lastName').textContent = JSON.parse(sessionStorage.getItem('userWhichLoggedIn')).lastName;
elem('.email').textContent = JSON.parse(sessionStorage.getItem('userWhichLoggedIn')).email;