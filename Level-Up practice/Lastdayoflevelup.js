//1
function isSumdivisibleBy7(a, b) {
    let sum = a + b;  
    if (sum % 7 === 0) {  
        console.log(1);  
    } else {
        console.log(0);  
    }
}

let a = 31;
let b = 4;

isSumdivisibleBy7(a, b);  

//2
function sumofnum(c,d){
    let sum=0;
    for(i=c;i<=d;i++){
        sum+=i;
    }
    console.log(sum);
}
let c=3;
let d=9;
sumofnum(c,d);

//3
function findinteger(n){
    if(n%2===0){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
let n=12;
 findinteger(n);

 //4
 function averageOfArr(array) {
    let sum = 0; 
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let avg = sum/array.length;
    console.log(avg);
}
let array=[10,20,30,40];
averageOfArr(array);

//5
function sumofevennum(array2){
    let sum=0;
    for(i=0;i<array2.length;i++){
        if(array2[i]%2===0)
            sum+=array2[i];
    }
    console.log(sum);
}
let array2=[1,2,3,4,5,6,7,8,9,10];
sumofevennum(array2);

//6
function reversethennum(start,end){
    let reverse="";
    for(i=start;i>=end;i--){
        reverse+=i+" ";
    }
    console.log(reverse);
}
let start=10;
let end=5;
reversethennum(start,end);

//7
function printpositivesign(num){
    if(n>0){
        console.log("Positive");
    }
    else if(n<0){
        console.log("Negative");
    }
    else{
        console.log("Zero");
    }
}
let num=5;
printpositivesign(num);

//8
function sumofnums(e,f){
    let sum=0;
    for(let i=e;i<=f;i++){
        if(i%2===0){
            sum+=i;
        }
    }
    console.log(sum);
}
let e=5;
let f=10;
sumofnums(e,f);

//9
function arrayproduct(arr){
    let product=1;
    for(i=0;i<arr.length;i++){
        product*=arr[i];
    }
    console.log(product);
}
let arr=[5,6,7];
arrayproduct(arr);

//10
function countOccurrences(arr1, value) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === value) {
            count++;
        }
    }
    console.log(count);
}

let arr1 = [1, 2, 2, 3, 2, 4];
let value = 2;
countOccurrences(arr1, value);

//11
function lengthoftriangle(a,b,c){
    if(a<=0||b<=0||c<=0){
        return "Not a triangle"
    }
    if(a==b&&b==c){
        return "Equilateral"
    }
    else if(a===b||b===c||a===c){
        return "isosceles"
    }
    else{
        return "Scalene"
    }
}
const result=lengthoftriangle(5,5,8);
console.log(result);

//12
