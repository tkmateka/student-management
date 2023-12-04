const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const registerBtn = document.getElementById('registerBtn');
const registerForm = document.getElementById('registerForm');

let users = [];

if (localStorage.users) {
    users = JSON.parse(localStorage.users)
}

registerBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Check if all fields have values
    if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
        return alert('ERROR: Form invalid');
    }

    // Check if password and Confirm password match
    if (passwordInput.value !== confirmPasswordInput.value) {
        return alert('ERROR: Password don\'t match');
    }

    // Find the matching user
    const currentUser = users.find(user => user.email.toLowerCase() === emailInput.value.toLowerCase())

    if (currentUser) {
        return alert('ERROR: User already exist');
    }

    users.push({
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    });

    localStorage.setItem('users', JSON.stringify(users));
    registerForm.reset();
    alert('You have registered successfully');
    window.location = 'login.html';
})

const inputChanged = (_id) => {
    if (document.getElementById(_id).value) {
        document.getElementById(`${_id}Error`).setAttribute('hidden', true);
    } else {
        document.getElementById(`${_id}Error`).removeAttribute('hidden');
    }
} 