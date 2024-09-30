//1
let count=0;
let totalCount=10;
while(count<=10){
    count++;
    console.log("The robot completed the lap:"+count);
}
console.log("Total lap completed");

//2

let charger=100;
while(charger>20){
    charger-=5;
    console.log("charger decreased to "+ charger);
}
console.log(" Battery is low.");

//3

let direction = 3;
switch (direction) {
    case 1:
        console.log("North");
        break;
    case 2:
        console.log("South");
        break;
    case 3:
        console.log("East");
        break;
    case 4:
        console.log("West");
        break;
    default:
        console.log("Invalid");
        break;

}

//4

// let currently=1000;
// let reduce=0;
// while(currently>reduce){
//     console.log("Reduces by:"+reduce);
//     reduce-=10;
// }
// console.log("Flight arrived");

//5

let station=2;
switch (station){
case 1:
    console.log("chennai");
    break;
    case 2:
    console.log("madurai");
    break;
    case 3:
    console.log("Tenkasi");
    break;
    default:
        console.log("Invalid");
}

//6

for(let i=100;i<=1000;i+=100){
    console.log("Interval"+" "+i+"ft");
  }
  console.log("1000ft in 10th interval");