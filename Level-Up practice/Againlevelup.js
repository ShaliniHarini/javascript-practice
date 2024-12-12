//1
function determineDayType(day) {
    if( day == 1 || day == 7) {
        console.log("Weekend");
    }
    else {
        console.log("Weekday");
    }
}
let day=7;
determineDayType(day);

//2
function printevenstar(n){
    let output="";
    for(let i=1;i<=n;i++){
        if(i%2===0){
            output+="* "
        }
        else{
            output+=(i*2)+" ";
        }
    }
    console.log(output);
}
let n=3;
printevenstar(n);
n=10;
printevenstar(n);

//3
function indexarray(array,n){
for (let i = 0; i < array.length; i++) {
    if (array[i] === 5) {
        console.log(`Found the index of 5: ${i}`);
    }
}
}
indexarray([1,2,5,3,4,5],5);


//4
function averagearray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++) { 
        if(arr[i]%2!==0){
        sum += arr[i] 
        }
    }
    let average = sum / arr.length; 
    console.log(average); 
}

averagearray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//5
function reversearr(arr){
    let reverse= [];
    for(i=arr.length-1;i>=0;i--){
        if(arr[i]%2===0)
        reverse.push(arr[i]);
    }
    console.log(reverse);
}
reversearr([1,2,3,4,5,6,7,8,9,10]);

//6
function getPositiveNumbers(arr) {
    let positiveNumbers = [];  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {  
            positiveNumbers.push(arr[i]);      
        }
    }

    console.log(positiveNumbers); 
   
}
getPositiveNumbers([1, -2, 3, -4, 5, -6, 7, 8, -9, 10]);


