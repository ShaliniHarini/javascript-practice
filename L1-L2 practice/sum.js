1
function names(fruits){
let len=fruits.length;
      for(i=0;i<fruits.length;i++){
      console.log(fruits[i]);
      }
    }
// }
// names(["apple","banana","kiwi"]);

// // 2
// function printeven(num){
//     for(i=0;i<=num.length;i++){
//         if(num[i]%2===0){
//          console.log(num[i]);
//         }
//     }
// }
// printeven([1,2,3,4,5,6,7,8,9]);

// // 3
// function printodd(num){
//     for(i=0;i<num.length;i++){
//         if(num[i]%2!==0){
//             console.log(num[i]);
//         }
//     }
// }
// printodd([13,15,16,17,19,21,22]);

// // 4
// function summofeven(num){
//     let sum=0;
//     for(i=0;i<num.length;i++){
//         if(num[i]%2===0){
//             sum+=num[i];
//         }
//     }console.log(sum);
// }
// summofeven([1,2,3,4,5,6,7,8,9,10])

// // 5
// function sumofodd(num){
//     let sum=0
//     for(i=0;i<num.length;i++){
//         if(num[i]%3!==0){
//            sum+=num[i];
//         }
//     }console.log(sum);
// }
// sumofodd([2,3,4,5,6,7,8,9,21,31,41]);

// // 6
// // let num=[2,7,11,15];
// // let target=9;
// // for(i=0;i<num.length;i++){
// //     for(j=1;j<num.length;j++){
// //         if(num[i]+num[j]==target){
// //             console.log([i,j]);
// //         }
// //     }
// // }

// // 7
// let numbers=[1,2,3,4];
// let output=[];
// let product=1;
// for(i=0;i<numbers.length;i++){
//     product*=numbers[i];
// }
// for(j=0;j<numbers.length;j++){
//     output.push(product/numbers[j]);
// }
// console.log(output);


// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

// let num=[2,7,11,15]
// let target=9;
// for(i=0;i<num.length;i++){
//      for(j=0;j<num.length;j++){
//         if(num[i]+num[j]===target){
//             console.log([i,j]);
//         }
//      }
// }

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

// let num=[2,7,11,15];
// let target=9;
// for(i=0;i<num.length;i++){
//     for(j=1;j<num.length;j++){
//         if(num[i]+num[j]==target){
//             console.log([i,j]);
//         }
//     }
// }

let num=[2,7,11,15];
let target=9;
for(i=0;i<num.length;i++){
    for(j=1;j<num.length;j++){
        if(num[i]+num[j]==target){
            console.log([i,j]);
        }
    }
}
