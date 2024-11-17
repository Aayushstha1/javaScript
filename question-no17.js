// let participants[];
// function registerParticipant(){
//     const name = document.getElementById("name").value;
//     if (name === "") {
//         alert("Please enter a name!");
//         return;
//     }
//     participants.push(name);
//     const list = document.getElementById("participant-list");
//     const listItem = document.createElement("li");
//     listItem.textContent = name;
//     list.appendChild(listItem);
//     document.getElementById("total-registrations").textContent = participants.length;
//     document.getElementById("name").value = "";
// }

let participants = []; 

function registerParticipant() {
    const name = document.getElementById("name").value; 

    if (name === "") {
        alert("Please enter a name!");
        return;
    }

    participants.push(name);

    const list = document.getElementById("participant-list");
    const listItem = document.createElement("li");
    listItem.textContent = name;
    list.appendChild(listItem);

    document.getElementById("total-registrations").textContent = participants.length;

    document.getElementById("name").value = "";
}

