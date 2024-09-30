// calculateArea();
// greetUser();
// function calculateArea() {
//  const radius = 5;
 
//  const area = Math.PI * radius * radius;
//  console.log(area);
// }
// function greetUser() {
//  console.log(userName);
//  var userName = "John";
// }


// let count = 1;
// while (count > 0) {
//  console.log("Counting down: " + count);
//  count = count + 1;
// }


function sumNumbers(n) { 
    let sum = 0;
    let i = 1; // Start from 1 instead of 0
    while (i <= n) { // Change the condition to include 'n'
      sum += i;
      i++;
    }
    return sum;
}
let result=sumNumbers(5);
console.log(result);


function calculateGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score <= 80) {
        console.log("Grade: B");
    } else if (score <= 70) {
        console.log("Grade: C");
    } else if (score >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}