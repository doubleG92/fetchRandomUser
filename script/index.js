import { randomuserAPI } from "./fetchService.js";

//users table functional
const usersTableBody = document.getElementById('usersTableBody');
const modal = document.getElementById('myModal');
const closeButton = document.getElementById('closeButtonForUserModal');
let usersList = [];

(async() => {
    const { results, info } = await randomuserAPI.get('?results=10');
    usersList = results;

    results.forEach(element => {
        const { id, name, location } = element; //nuyna voncvor gres element.name
        usersTableBody.innerHTML += `
            <tr id="${id.name}">
                <td>${name.first} ${name.last}</td>
                <td>${location.country}</td>
            </tr>
        `
    });
})();

(() => {
    usersTableBody.addEventListener('click', (event) => {
        modal.style.display = 'block';
        const tr = event.target.parentNode //tr
        const userId = tr.getAttribute('id')

        const selectedUser = usersList.find(user => user.id.name === userId);

        console.log(usersList , "usersList")
        console.log(userId);
        console.log(selectedUser , "selectedUser")
    })
})();

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
