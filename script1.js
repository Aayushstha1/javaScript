
const names = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');

const formElement = document.getElementsByTagName('form')[0];
const submitbtn = document.getElementById('submit');
const totalElement = document.getElementById('total');
const toast = document.getElementById('toast');
let counter = 0;
// form.style.backgroundColor = 'red';
number.style.backgroundColor = 'blue';
formElement.addEventListener("mouseenter", ()=> {
    formElement.style.backgroundColor = 'pink'
})
formElement.addEventListener("mouseleave", ()=> {
    formElement.style.backgroundColor = ''
})

submitbtn.addEventListener('click', (e)=>{
    console.log(e);
    e.preventDefault();
    console.log(email.value);

    if(!email.value==='hi@gmail.com'){
        alert("email wrong");
        return;
    }
    console.log("verification succesful");
    counter++;
    totalElement.innerText = 'the total number of students is registered is '+ counter ;
    names.push(name.value);
    console.log(names);
    toast.style.display = 'flex';
    dynamicPushNames();
    setTimeout(() => {
        toast.style.display = 'none';
        
    }3000)


   // console.log('the total number of students registered are ${counter}');
})
function dynamicPushNames(){
    listofnames.innerHTML = '';
    names.map ((value, index) => {
        const li = document.createElement('li');
        li.innerText = value;
        listofnames.appendChild(li);
        
    })
}
}




number.addEventListener("click", ()=> {
    number.style.backgroundColor = ''
})
email.addEventListener("mouseenter", ()=> {
    email.style.backgroundColor = 'red'
})
email.addEventListener("mouseleave", ()=> {
    email.style.backgroundColor = ''
})
console.log(formElement,name,email,number);
