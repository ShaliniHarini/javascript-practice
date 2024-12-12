//1
function printfizzbuzz(n){
    for(i=1;i<=n;i++){
        if(i%3===0&&i%5===0){
            console.log("FizzBuzz");
        }
        else if(i%3===0){
            console.log("fizz");
        }
        else if(i%5===0){
            console.log("Buzz");
        }
    }
}
printfizzbuzz(10);


//2

//GCD
function findgcd(a,b){
    while(b!==0){
          let temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
 let a=findgcd(20,6);
 if(a===1){
    console.log("co-prime");
 }
 else{
    console.log("Not a co-prime");
 }


//3

 //Normal find gcd
 function findgcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
   console.log(a);
 }
 findgcd(10);


 //4

 //  //Prime numbers(25/11/24)
 function isPrime(num) {
   if (num <= 1) return false; 
   for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) {
           return false; 
       }
   }
   return true; 
}
console.log(isPrime(11)); 
console.log(isPrime(25)); 