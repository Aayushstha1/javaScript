function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

console.log(calculateBMI(70, 1.75)); 
console.log(calculateBMI(60, 1.60)); 
console.log(calculateBMI(80, 1.80)); 
