//Max
// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) {
//             return mid; // Target found
//         } else if (arr[mid] < target) {
//             low = mid + 1; // Search in the right half
//         } else {
//             high = mid - 1; // Search in the left half
//         }
//     }
//     return -1; // Target not found
// }
// // Example Usage
// const numbers = [1, 3, 5, 7, 9, 11];
// console.log(binarySearch(numbers, 7)); // Output: 3
// console.log(binarySearch(numbers, 4)); // Output: -1


// function num(s){
//     for(let i=1;i<=s;i++){
//         let space=" ";
//         for(j=1;i<=i;j++){
//             space+=i+" ";
//         }
//         console.log(space);
//     }
// }
// num(5);


//count of the vowels
// function countWordsStartingWithVowel(sentence) {
//     let vowels = "aeiouAEIOU"; 
//     let words = sentence.split(" "); 
//     let count = 0;
  
//     for (let word of words) {
//       if (word.length > 0 && vowels.indexOf(word[0]) !== -1) { 
//         count++; 
//       }
//     }
  
//     console.log(count);
//   }
//   countWordsStartingWithVowel("Apple orange umbrella");
//   sentence=("Sky is overcast");
//   countWordsStartingWithVowel(sentence);


  function counttheVowels(sentence){
    let Vowels="aeiouAEIOU";
    let words=sentence.split(" ");
    let count=0;
    for(let word of words){
        if(word.length>0 && Vowels.indexOf(word[0]) !== -1){
            count ++;
        }
    }
    console.log(count);
  }
  counttheVowels("Apple orange umbrella");
  sentence=("Sky is over on the umbrella");
  counttheVowels(sentence);
  


