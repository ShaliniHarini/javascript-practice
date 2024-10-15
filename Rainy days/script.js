//1
const button1=document.getElementById("changeTextButton")
button1.addEventListener("click", ()=>{
    document.getElementById("header").innerText="Text Changed";
} );


 //2






 //3


const box=document.getElementById("toggleButton")
box=addEventListener("click", () => {
    document.querySelector(".text").classList.toggle("highlight");
});


//4


const button=document.getElementById("removeItemsButton")
button=addEventListener("click", () => {
    const items = document.querySelectorAll(".list-item");
    items.forEach(item => item.remove());
});


//5

const box1=document.getElementById("colorButton")
box1=ddEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue"; 
});

//6
const color=document.getElementById("colorChangeButton")
color.addEventListener("click", () => {
    document.querySelector(".text").style.color = "purple"; 
});


//7







//8