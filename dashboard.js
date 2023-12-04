const users = localStorage.users ? JSON.parse(localStorage.users) : null;
const currentUser = sessionStorage.currentUser ? JSON.parse(sessionStorage.currentUser) : null;
const userNameElement = document.getElementById('userName');
const tbody = document.getElementById('tbody');

if (!currentUser) {
    window.location = 'login.html';
}

userNameElement.innerHTML = `${currentUser.firstName} ${currentUser.lastName}`;

// Load table data
users.map(user => {
    tbody.innerHTML += `
        <tr>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        </tr>
    `
})

console.log(currentUser);