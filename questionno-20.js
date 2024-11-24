const form = document.getElementsByTagName('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
email.addEventListener('mouseenter',()=>{\
    email.style.backgroundcolor = "red";
})
email.style.backgroundcolor = "green";
console.log(form, name, email, number);