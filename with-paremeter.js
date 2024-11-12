// Function to introduce yourself with parameters
function introduceMyself(name, age, isStudent) {
    // Log the introduction message using parameters
    console.log(`Hi, my name is ${name}, I am ${age} years old, and it is ${isStudent} that I am a student.`);
    
    // Check if the person is a student
    if (isStudent) {
        console.log("I am currently a student.");
    } else {
        console.log("I am not currently a student.");
    }
}

// Call the function with arguments
introduceMyself("Aayush stha", 22, true);
