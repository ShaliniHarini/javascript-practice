// function sumOfDigits(num){
//       let sum=0;
//       while(num>0){
//         let digit=num%10;
//         sum +=digit*6;
//         num=Math.floor(num/10);
//       }
//       return sum;
// }
// let num= 12345;
// console.log("The sum number is;" + sumOfDigits(num));


// function add(n1, n2) {
//   {sum=n1+n2;
//     if(sum%7===0){
//       console.log(true);
//     }
//     else{
//       console.log(false);
//     }
  
//   }
// }
// add(5,4);

// let names=["valarmathi","harini","shalini"]
// console.log(names.length);
// names.unshift(names.length);
// console.log(names);


// let address =["Freshworks, Global Infocity, Perungudi, Chennai - 600096"]
// let sum=address.spilt(",");
// for(i=0;i<sum.length;i++){
//   console.log(sum[i].trim());
// }
// return sum;

let address=["Freshworks, Global Infocity, Perungudi, Chennai - 600096"]
function partsOfString(address){
let sum=address.split(",");
for(i=0;i<sum.length;i++){
console.log(sum[i].trim());
}
return sum;
}


function leapYear(year){
    if(year%4===0 || year%400===0){
        console.log("Y");
    }
    else if(year%100===0){
        console.log("N");
    }
    else{
        console.log("N");
    }
    }
    leapYear(2020);