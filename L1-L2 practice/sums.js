//to print the fruits names

function names(fruits){
    let len=fruits.length;
    for(i=0;i<fruits.length;i++){
        console.log(fruits[i]);
    }
}
names(["Apple","Kiwi","Grapes"])

//to print the even numbers in array

function printeven(num){
    for(i=0;i<=num.length;i++){
        if(num[i]%2===0){
            console.log(num[i]);
        }
    }
}
printeven([1,2,3,4,5,6,7,8,9,10])

//to printodd number in array
function printodd(num){
    for(i=0;i<=num.length;i++){
        if(num[i]%2!==0){
            console.log(num[i]);
        }
    }
}
printodd([2,3,5,6,7,8,90,11,21,22,23,27]);

//add all the even numbers in a array
function addevennum(num){
    let sum=0;
    for(i=0;i<=num.length;i++){
      if(num[i]%2===0){
        sum+=num[i];
      }
    }
    console.log(sum);
}
addevennum([1,2,3,4,5,6,7,8,9,10,12,14,151,16]);

//add all the odd numbers ia a array
function addoddnum(num){
    let sum=0;
    for(i=0;i<num.length;i++){
        if(num[i]%2!==0){
            sum+=num[i];
        }
    }
    console.log(sum);
}
addoddnum([3,4,5,7,9,11,21,22,24,27,31]);

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

let numbers=[2,7,11,15];
let target=9;
for(i=0;i<numbers.length;i++){
    for(j=1;j<numbers.length;j++){
        if(numbers[i]+numbers[j]==target){
            console.log([i,j]);
        }
    }
}

// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

let number=[1,2,3,4]
let output=[];
let product=1;
for(i=0;i<number.length;i++){
    product*=number[i];
}
for(j=0;j<number.length;j++){
    output.push(product/number[j])
}
console.log(output);


// Input: nums = [3, 2, 1, 5, 6, 4], k = 2
// Output: 5

