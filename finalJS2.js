var c = document.getElementById("c");
var ctx = c.getContext("2d");
var x = 500;
var y = 500;
var r = 5;
ctx.fillStyle = "black";

document.getElementById("c").addEventListener("click", mouseClick, false);

function canvasAppear(){
document.getElementById("c").style.display = "block";
}

function mouseClick(e){
  ctx.beginPath();
  ctx.arc(e.clientX-9, e.clientY-250,r,0,2*Math.PI);
  ctx.fill();
}

function buttonRed(e){
  //ctx.beginPath();
  //ctx.arc(e.clientX-9, e.clientY-250,r,0,2*Math.PI);
  ctx.fillStyle = "red";
  //ctx.fill();
}
function buttonGreen(e){
ctx.fillStyle = "green";
}
function buttonBlue(e){
ctx.fillStyle = "blue";
}
//works up to this point
