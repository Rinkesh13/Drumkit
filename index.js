for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var button = this.innerHTML;
    generator(button);
    animation(button);
});
}
document.addEventListener("keydown",function(event){
  generator(event.key);
  animation(event.key);
});
function generator(key){
  switch(key)
  {
    case "R":
    var audio =new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "I":
    var audio =new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "N":
    var audio =new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "K":
    var audio =new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "E":
    var audio =new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "S":
    var audio =new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "H":
    var audio =new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    default: console.log(button);
  }}

function animation(key){
var active=document.querySelector("."+key);
active.classList.add("pressed");
setTimeout(function(){
  active.classList.remove("pressed");
}, 100);
}
