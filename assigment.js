// Declare variables
let name = "Aayush stha"; // Using  Let can  Replace with your actual name
let age = 22;          // Replace with your actual age
let isStudent = true;  // Set to true if you are a student, false otherwise

// Function to introduce yourself
function introduceMyself() {
    // Log the introduction message
    console.log(`Hi, my name is ${name}, I am ${age} years old, and it is ${isStudent} that I am a student.`);
    
    // Check if the person is a student
    if (isStudent) {
        console.log("I am currently a student.");
    } else {
        console.log("I am not currently a student.");
    }
}

// Call the function
introduceMyself();
