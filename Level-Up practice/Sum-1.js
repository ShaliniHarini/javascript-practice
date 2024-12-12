//1
function printevennum(a,b){
    let sum=0;
    for(i=a;i<=b;i++){
        if(i%2===0){
            sum+=i;
        }
    }
    console.log(sum);
}
printevennum(5,10);

//2
function arrayproduct(arr){
    let product=1;
    for(i=0;i<arr.length;i++){
        product*=arr[i]; 7 
    }
    console.log(product);
}
arrayproduct([1,2,3,4]);
arrayproduct([5,6,7]);

//3
function countOccurrences(arr,value){
    let count=0;
    for(i=0;i<=arr.length;i++){
        if(arr[i]===value){
            count++;
        }
    }
    console.log(count);
}
countOccurrences([1,2,2,3,2,4],2);

//4
function reversestring(str){
    let reverse= "";
    for(i=str.length-1;i>=0;i--){
        reverse+=str[i];
    }
    console.log(reverse);
}
 reversestring("Hello");
 reversestring("World");

 //5
 function Sumofdigits(N){
 let sum=0;
 N=Math.abs(N);
 while(N>0){
    sum+=N%10;
    N=Math.floor(N/10);
 }
 console.log(sum);
}
Sumofdigits(6);
Sumofdigits(22);