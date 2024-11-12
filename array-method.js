// 1.Using splice to Modify Array: Create an array with the following elements: ["apple", "banana",
//     "cherry", "date", "elderberry"]. Use the splice method to remove the element "cherry" and add
//     "fig" and "grape" in its place. Display the modified array.

const fruits = ["Apple", "banana", "Cherry", "date" , "elderberry"];
fruits.splice(0,2)
console.log(fruits);
fruits.splice(2, 0, "fig", "grape");
console.log(fruits);

