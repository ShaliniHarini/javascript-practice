// 1

function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenOrOdd(7)); 
console.log(isEvenOrOdd(4)); 

// 2

function avgArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}
let result=avgArray([1,2,3,4,5,]);
console.log(result);

// 3

function countPositivesAndNegatives(arr) {
    const positiveCount = arr.filter(num => num > 0).length;
    const negativeCount = arr.filter(num => num < 0).length;

    return { positive: positiveCount, negative: negativeCount };
}
let b=countPositivesAndNegatives([1,-2,3,-4,5,-6]);
console.log(b);

// 4

function findLargest(arr) {
    let largest = arr[0]; 

    arr.forEach(num => {
        if (num > largest) {
            largest = num; 
        }
    });

    return largest;
}
let c=findLargest([10,50,3,100,23])
console.log(c)

// 5

function countVowels(str) { 
    let vowels = "aeiou";
    let count = 0; 

    for (let i = 0; i < str.length; i++) { 
        if (vowels.includes(str[i].toLowerCase())) { 
            count++; 
        }
    }

    return count > 0 ? count : "No Vowels Found"; 
}

let d = countVowels("javascript");
console.log(d); 

// 6

function containsValue(arr,value){
    for(i=0;i<arr.length;i++){
        if(arr[i]===value){
            return true;
        }
    }
    return false;
}

console.log(containsValue([1, 2, 3, 4], 3)); 
console.log(containsValue([1, 2, 3, 4], 5)); 

// 7

function isArrayEmpty(arr){
    for(let i=0;i<arr.length;i++){
         if (arr[i] === arr[0]){
            return false;
        }
    }
    return true;
}
console.log(isArrayEmpty([]));
console.log(isArrayEmpty([1,2,3]));




