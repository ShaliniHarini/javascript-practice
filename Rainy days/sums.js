// 1
let number=[5,10,15,20,25];
let sum=0;
for(let i=0;i<number.length;i++){
    sum+=number[i];
}
console.log(sum);



// 2
let age=30;
let height=5.9;
console.log("age:"+age+"height:"+height);



// 3
function calculatavg(array){
        let sum=0;
        for(let i=0;i<array.length;i++){
            sum+=array[i]
        }
        let avg=sum/array.length
        return avg;
    }
    let avg=[3, 6, 9, 12, 15];
    console.log(calculatavg(avg))



// 4
let num=[12, 45, 67, 23, 89, 54, 90];
for(let i=0;i<num.length;i++){
    if(num[i]>50){
        console.log(num[i]);
    }
}



// 5
function calculateCircleProperties(radius) {
    const pi = 3.14;
    const area = pi * radius * radius;
    const circumference = 2 * pi * radius;
    return { area, circumference };
}
const radius = parseFloat(prompt("Enter the radius of the circle:"));
const circleProperties = calculateCircleProperties(radius);
console.log(`Area of the circle: ${circleProperties.area}`);
console.log(`Circumference of the circle: ${circleProperties.circumference}`);


