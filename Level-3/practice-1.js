// //1
// function printfizzandbuzz(n){
//     for(i=1;i<=n;i++){
//         if(i%3===0&&i%5===0){
//             console.log("FizzBuzz");
//         }
//         else if(i%3===0){
//             console.log("Fizz");
//         }
//         else if(i%5===0){
//             console.log("Buzz");
//         }
//         else{
//             console.log(i);
//         }
//     }
// }
// let n=100;
// printfizzandbuzz(n);

// //2
// function isPrime(num) {
//     if (num < 2) {
//         return false; 
//     }


//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false; 
//         }
//     }

//     return true; 
// }

// let num = 2;
// console.log(isPrime(num));  
// num=4;
// console.log(isPrime(num));
// num=25;
// console.log(isPrime(num));
// num=3;
// console.log(isPrime(num));


// function gcd(num1,num2){
//     for(i=2;i<=num2;i++){
//         if(num1%i==0&&num2%i==0){
//             let result=i
//         }
//     }
//     console.log(result);
// }
// let num1=10;
// let num2=8;
// gcd(num1,num2);

// function factor(n){
//     let factorial=1;
//     for(i=1;i<=n;i++){
//         factorial*=i
//     }
//     return factorial
// }
// console.log(factor(5));


// function lcm(a, b) {
//     for(i=1;i<=b;i++){
//         if(a%i==0 && b%i==0){
//             var lcm=i;
//         }
//     }
//     var mul=a*b;
//     var ans=mul/lcm;
//     console.log(ans)

//     return Math.abs (a*b)
//    }
// console.log(lcm(6,12));

// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//     b=a%b;
//     a=temp;
//     }
//     return a;
// }
// console.log(gcd(12,18));
// function findlcm(a,b){
//     return (a*b)/gcd(a,b)
// }
// console.log(findlcm(12,18));

// // reverse the star like 5,4,3,2,1.
// function printstar(n){
// for(i=5;i<=n;i--){
//     console.log("*".repeat(i));
// }
// }
// printstar(5);

// //order star printing like 1,2,3,4,5
// function orderstar(n){
//     for(i=1;i<=n;i++){
//         console.log("*".repeat(i));
//     }
// }
// orderstar(5);

function number (n){
    for(i=1;i<=n;i++){
        let spaces=" ".repeat(n-i);
        let symbols=(i%2===0?"# ":"* ").repeat(i).trim();
        console.log(spaces+symbols);
    }
    for(i=n-1;i>=0;i--){
        let spaces=" ".repeat(n-i);
        let symbols=(i%2===0?"# ":"* ").repeat(i).trim();
        console.log(spaces+symbols);
    }
}
number(10);



// //GCD(21/11/24)
// function findgcd(a,b){
//     while(b!==0){
//           let temp=b;
//         b=a%b;
//         a=temp;
//     }
//     return a;
// }
//  let a=findgcd(20,6);
//  if(a===1){
//     console.log("co-prime");
//  }
//  else{
//     console.log("Not a co-prime");
//  }

//  //Prime numbers(25/11/24)
//  function isPrime(num) {
//    if (num <= 1) return false; 
//    for (let i = 2; i <= Math.sqrt(num); i++) {
//        if (num % i === 0) {
//            return false; 
//        }
//    }
//    return true; 
// }
// console.log(isPrime(11)); 
// console.log(isPrime(25)); 


// function primenum(num){
//    if (num<=1) return false;
//    for(let i=2;i<=Math.sqrt(num); i++){
//       if(num%i===0){
//             return false;
//       }
// }
// return true;
// }
// console.log(primenum(3));

// function mainfunction(arr){
//    for(i=0;i<arr.length;i++){
//       // console.log(arr[i]);
//       let result=primenum(arr[i]);
//       console.log(result);
//    }

// }
// mainfunction([1,3,5,12,15]);


function primenum(num) {
   if (num <= 1) return false; 
   for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) { 
           return false;
       }
   }
   return true;
}

function mainfunction(arr) {
   for (let i = 0; i < arr.length; i++) {
       let result = primenum(arr[i]);
       console.log(result);
   }
}

mainfunction([1, 3, 5, 12, 15]);


//Fibonacci series (26/11/24),
//add+fiboo,

//only the fibooo
// function fibonacciSeries(n) {
//    let a = 0, b = 1;
//    console.log(a); 

//    for (let i = 1; i < n; i++) {
//        console.log(b); 
//        let temp = b;
//        b = a + b;
//        a = temp;
//    }
// }
// let n = 10; 
// fibonacciSeries(n);

// function fibonum(n) {
//    let a = 0, b = 1;
//    let sum = a;  
//    let arr = []; 

//    arr.push(a); 

//    for (let i = 1; i < n; i++) {
//        arr.push(b); 
//        sum += b;       
//        let next = a + b; 
//        a = b;          
//        b = next;        
//    }

//    console.log(arr);
//    console.log("Sum of n number of terms:", sum);
// }

// fibonum(10);


//pattern1
// function starn(s){
//    for(let i=1;i<=s;i++){
//       let space=" ";
//       for(let j=1;j<=i;j++){
//          if(i%2===0){
//             space+="* ";
//          }
//          else{
//             space+=i+" ";
//          }
//       }
//       console.log(space);
//    }
 
// }

// starn(8);


//numbers patteren
// function patnum(v){
//    for(let i=1;i<=v;i++){
//       let space=" ";
//       for(let j=1;j<=i;j++){
//          space+=i+" ";
//       }
//       console.log(space);
//    }
// }
// patnum(4);


//factorial(26/11/24)


// function factnum(n){
//    let factorial=1;
//    for(i=1;i<=n;i++){
//      factorial*=i;
//    }
//    console.log(factorial);
// }
// factnum(5)

// function factnum(n){
//    let fact=1;
//    let sum=0
//    for(i=1;i<=n;i++){
//       fact*=i;
//       sum+=fact;
//    }
//    console.log(sum);
// }
//  factnum(5);


//sepration of numbers(28/11/24)
// function sepnum(n){cc
//    let sum=0;
//    while(n>0){
//       sum+=n%10;
//       n=Math.floor(n/10);
//    }
//     console.log(sum);
// }
// sepnum(12345);

// function sepnum(n){
//    let sum=0;
//    while(n>0){
//       sum+=n%10;
//       n=Math.floor(n/10);
//    }
//    console.log(sum);
// }
//  sepnum(12345);


// function addDigitsToSingle (n) {
//    let num = n;
   
//    while (num >= 10) {
//        let sum = 0;
//        while ( num > 0) {
//            let digit = num % 10;
//            sum += digit;
//            num = Math.trunc(num / 10);
//        }
//        num = sum;
//    }
//    console.log(num);
// }
// addDigitsToSingle(78945623);


// function addnum(n){
//    let num=n;
//    while(num>=10){
//       let sum=0;
//       while(num>0){
//          let digit=num%10;
//          sum+=digit;
//          num=Math.trunc(num/10);
//       }
//       num=sum;
//    }
//    console.log(num);
// }
// addnum(78945623);


function stars(s){
    for(let i=1;i<=s;i++){
        let space=" "
        for(j=1;i<=i;j++){
            if(i%3===0){
                space+="* ";
            }
            else{
                space+=i+" ";
            }
        }
        console.log(space);
    }
}
stars(5);
 




 
 
 
 
 




