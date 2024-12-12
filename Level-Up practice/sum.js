//1
function reversestring(str){
    let reverse="";
    for(i=str.length-1;i>=0;i--){
        reverse+=str[i];
    }
    console.log(reverse);
}
reversestring("shalini");
reversestring("Valarmathi");
reversestring("Harini");

//2
function findthelength(str){
    let len=str.length;
    console.log(len);
}
findthelength("Valarmathi");
findthelength("Harini");
findthelength("Shalini");

//3
function createanarray(n){
    let num=[1,2,3,4,5];
    console.log(num);
}
createanarray([1,2,3,4,5,]);

//4
function printelements(arr){
    let print=(arr[1]);
    let set=(arr[3]);

    console.log("2nd element:",print);
    console.log("4th element:",set);
}
printelements(["Apple","Banana","Orange","Kiwi"]);

//5
function modifyarray(){
    let array=["Array1","Array2","Array3","Array4"];
    array[1]="modified";
    console.log(array);
}
modifyarray()

//6
function findlength(str){
    let len=str.length;
    console.log(len);
}
findlength("Shalini");

//7
function printthenum(){
    let numbers=[1,2,3,4,5,6,7,8,9,10];
    for(i=0;i<numbers.length;i++){
        console.log(numbers[i]);
    }
}
printthenum()

//8
function sumOfNum() {
    let sum = 0;
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum); 
}
sumOfNum();

//9
function printeachelement(){
let animals=["Cat","lion","tiger","dog"];
for(animal of animals){
    console.log(animal);
}
}
printeachelement();

//10
function printarrayelement(){
    let numbers=[91,92,93,94,95,96,97,98,99,100]
    numbers.forEach(function(numbers){
        console.log(numbers);
    })
}
printarrayelement()

//11
function printoddnum(num){
     for(i=1;i<num.length;i++){
        if(num[i]%2!==0){
            console.log(num[i]);
        }
     }
}
printoddnum([81,82,83,84,85,86,87,88,89,90]);

//12
function doubleValues(){
    let numbers=[10,20,30,40,50]
    let doubleNumbers=numbers.map(function(numbers){
        return numbers*2;
    })
    console.log(doubleNumbers);
}
doubleValues();

//13
function printreverse(arr){
    let rever="";
    for(i=arr.length-1;i>=0;i--){
        rever+=arr[i];
    }
   console.log(rever);

}
printreverse("shalini");
printreverse("Keerthika sopnasundari");

//14
function printcolor(){
    let arr=["pink","green","purple"];
    for(color of arr){
        if(color=="green"){
            console.log("True")
        }
        
    }
}printcolor()

//15
function indexofnum(){
    let array=[10,20,30,40,50,60]
    let target=50;
    let index=-1
for(i=0;i<array.length;i++){
    if(array[i]=== target){
        index=i;
        break;
    }
    }
    console.log(index);
    
}
indexofnum();

//16
function sumofevennum(arr){
    let sum=0;
      for(i=0;i<=arr.length;i++){
        if(arr[i]%2===0){
            sum+=arr[i];
        }
      }
      console.log(sum);
}
sumofevennum([1,2,3,4,5,6,7,8,9,10]);

//17
function squarenumofarr(){
    let squarenum=[1,2,3,4,5,6,7,8,9,10];
    let squarethenumbers=squarenum.map(function(squarenum){
        return squarenum*2
    })
    console.log(squarethenumbers);
}
squarenumofarr()

//18
function typeOfTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Not a triangle";
    }
    if (a === b && b === c) {
        return "Equilateral";
    }
    else if (a === b || b === c || a === c) {
        return "Isosceles";
    }
    else {
        return "Scalene";
    }
}
const result = typeOfTriangle(5, 5, 8);
console.log(result); 

//19
function calculateElectricityBill(usage) {
    let bill = 0.0;
    
    if (usage <= 100) {
        bill = usage * 0.10;
    } else if (usage <= 300) {  
        bill = (100 * 0.10) + ((usage - 100) * 0.15);
    } else {
        bill = (100 * 0.10) + (200 * 0.15) + ((usage - 300) * 0.20);
    }

    return bill;  
}
let totalBill = calculateElectricityBill(350);
console.log(`Total Bill: $${totalBill.toFixed(2)}`); 

//20
function printArray(num) {
        if (num % 11 === 0) {
            console.log("TRUE");
        } else {
            console.log("FALSE");
        }
    }

printArray([10]);

//21
function print(n){
    for(let i=0;i<=n;i++){
if(i%2==0){
    console.log("#")
}
else{
    console.log(i);
}
    }
}
print(5);

//22
function indexofnum(array){
     array=[500,300,400,600];
    let target=300;
    let index=-1;
for(i=0;i<array.length;i++){
    if(array[i]=== target){
        index=i;
        break;
    }
    }
    if(index===-1){
        console.log("Element not found")
    }else{
    console.log(index);
}
    
    
}
indexofnum();

//23
//using swap method.
function swap(a, b) {
    return [b, a];
}

let x = 5;
let y = 10;
[x, y] = swap(x, y);
console.log(x, y); 

//24
function character(a,b){
    return [a,b]
}
let a1="shalini";
let b2="valar";
[a1,b2]=swap(a1,b2);
console.log(a1,b2);

//25
//without using  swap method.
let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log(a, b); 

//26
let num1 = "shalini";
let num2 = "valarmathi";
let num3 = "harini";

let temp1 = num1; 
num1 = num2;     
num2 = num3;      
num3 = temp1;     

console.log(num1, num2, num3) // valaramthi,harini,shalini.

//27
function checkproductendsinzero(a2,b3){
    let product=a2*b3;
    if(product%10===0){
        console.log("yes");
    }else{
        console.log("No");
    }
}
let a2=15;
let a3=2;
checkproductendsinzero(15,2);

//28
function printnum(n){
    for(i=1;i<=n;i++){
        if(i%2===0){
            console.log("#")
        }
        else{
            console.log(i);
        }
    }
}
printnum(10);

29
function reversenum(n){
    let output=""
    for(i=n;i>=1;i--){
        if(i%2!==0){
            output+="# ";
        }
        else{
            output+=i + " ";
        }
    }
    console.log(output.trim());
}
reversenum(5);

//30
function sumofdigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;  
        n = Math.floor(n / 10);  
    }
    return sum;
}

let n = 159;
console.log(sumofdigits(n));

//31
function printnum(n1){
    let result=" ";
    for(i=0;i<n1;i++){
        result+=n1+" ";
    }
    console.log(result.trim());
}
let n1=5;
printnum(n1);
n1=4;
printnum(n1);

//32(factorial)

function factorial(n){
    let sum=1
    for(i=1;i <= n;i++){
        sum *= i;
    }
    return sum;
}
console.log(factorial(5))




