const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

const inputChanged = (_id) => {
    if (document.getElementById(_id).value) {
        document.getElementById(`${_id}Error`).setAttribute('hidden', true);
    } else {
        document.getElementById(`${_id}Error`).removeAttribute('hidden');
    }
} 

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Check if all fields have values
    if (!emailInput.value || !passwordInput.value) {
        return alert('ERROR: Form invalid');
    }

    let users = [];

    if(localStorage.users) {
        users = JSON.parse(localStorage.users)
    };

    let currentUser = users.find(user => user.email === emailInput.value);

    if(!currentUser) {
        return alert('User not found')
    }

    if(currentUser.password !== passwordInput.value) {
        return alert('Password invalid')
    }

    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    alert('Logged in successfully');
    window.location = 'dashboard.html';
})