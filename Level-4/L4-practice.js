// function starn(n){
//     for(let i=1;i<=n;i++){
//         let space=" ";
//         for(j=1;j<=i;j++){
//             space+="* ";
//         }
//     }
//     console.log(space);
// }
// starn(4);



// //alpha order
// function alpha(arr){
//     let char=arr[0];
//     for(let i=0;i<arr.length;i++){
//       if(char<=arr[i]){
//         char=arr[i];
//       }
//     }
//     console.log(char);
// }
// alpha(["apple","grapes","orange","abi"]);


// //max

// function findmax(arr){
//     let max=arr[0];
//     for(i=1;i<arr.length;i++){
//         if(max<=arr[i]){
//             max=arr[i];
//         }
//        }
//       console.log(max);
//  }
//  findmax([100,200,300,400,800,900,1000,300]);
 
//  //min
//  function findmin(array){
//      let max=array[0];
//      for(i=0;i<array.length;i++){
//          if(max>=array[i]){
//              max=array[i];
//          }
//      }
//      console.log(max);
//  }
//  findmin([1000,200,7000,5000])
 
//  //alpha order
 
//  function firstalpha(arr){
//      let char=arr[0];
//      for(i=1;i<arr.length;i++){
//          if(char>=arr[i]){
//              char=arr[i];
//          }
//      }
//      console.log(char);
//  }
//  firstalpha(["kiwi","orange","grapes","bee"]);
 
 
//  findind a elements in tha array
//  function findb(arr){
//      for(let i=0;i<arr.length;i++){
//          if(arr[i].indexOf("dog")>=0){
//             console.log(arr[i]);
//          }
//      }
//  }
//  findb(["dog","cat","lion","zebra"]);


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

 