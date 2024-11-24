document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.textContent = "Thank you for registering, " + 
         document.getElementById("username").value + "!";
    confirmationMessage.classList.remove("hidden");
  
    document.getElementById("registrationForm").reset();
  });