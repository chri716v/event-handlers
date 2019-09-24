document.getElementById("hello").addEventListener("click", myFunction);

let myDogeGif = document.getElementById("doge");
let myHiddenDiv = document.getElementById("myHiddenD");
let myVisibleDiv = document.getElementById("myVisibleD");
let myInvincibleDiv = document.getElementById("myInvincibleD");
let btn = document.querySelector("#btn");
let showDogeGif = false;
let inputField = document.getElementById("test");
let inputFieldTwo = document.getElementById("dogetext");
let paragraf = document.getElementById("paragraf");

btn.addEventListener("click", myThirdFunction);
myDogeGif.addEventListener("mouseover", myFirstHoverFunction);
myDogeGif.addEventListener("mouseout", myFirstMouseOutFunction);
inputField.addEventListener("keydown", keyDownEvent);
inputField.addEventListener("keyup", keyUpEvent);
btn.addEventListener("keypressevent", keyPressEvent);
inputFieldTwo.addEventListener("keypress", keyPressEvent);
document.getElementById("paragraf").addEventListener("dblclick", doubleClick);



function myFunction() {
    document.getElementById("hello").innerHTML = "YOU CLICKED ME!";
    document.getElementById("hello").style.color = "red";
    document.getElementById("hello").style.height = "100px";
    document.getElementById("hello").style.width = "250px";
    document.getElementById("hello").style.backgroundColor = "yellow";
}
function myThirdFunction(myHiddenDiv){
    let x = document.getElementById("myHiddenD");
    let y = document.getElementById("myVisibleD");
    let z = document.getElementById("myInvincibleD");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.color = "red"
    } else {
        x.style.display = "none";
    }
    if (y.style.display === "none"){
        y.style.display = "block";
        y.style.color = "red"
    } else {
        y.style.display = "none";
    }
    if (z.style.display === "none"){
        z.style.display = "block";
        z.style.color = "red"
    } else {
        z.style.display = "none";
    }
}
function myFirstHoverFunction(){
    if(showDogeGif = false){
        dogex.style.visibility = "hidden"
    }else {
        showDogeGif = true;
        let dogex = document.getElementById("doge");
        dogex.style.height = "500px";
        dogex.style.widht = "700px";
    }
}
function myFirstMouseOutFunction(){
    if (showDogeGif = true){
        let dogey = document.getElementById("doge");
        dogey.style.height = "100px";
        dogey.style.widht = "250px";
    }
}
function keyDownEvent(){
    document.getElementById("test").style.background = "red";
}
function keyUpEvent(){
    document.getElementById("test").style.background = "white";
    
}
function keyPressEvent(){
    alert("You pressed a key inside the input field");
}
function doubleClick(){
    document.getElementById("paragraf").innerHTML = "I was double-Clicked";
}