//  jsg
var totalButton=document.querySelectorAll(".drum").length;
for( var i=0;i<totalButton;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",clickfun);}
   
   // alert("I got Clicked");
   //sound.play();
  // console.log(this.innerHTML); // to print the content of button
   //  this.style.color="white";
   //here we r going to play sound corresponding to button pressed using switch case
//    function clickf(){
 
   
// }
function clickfun(){
    var buttontext=this.innerHTML;
    makeSound(buttontext);
    buttonAnnimation(buttontext);
}
  
// add keypress even listeners whole page is listening  keyPress
document.addEventListener("keypress",function(event){
    // alert(event.key)
    makeSound(event.key);
    buttonAnnimation(event.key);
});
function makeSound(key){
    switch (key) {
     case 'w':
         var sound= new Audio("sounds/tom-1.mp3");
         sound.play();
         break;
     case 'a':
         var sound= new Audio("sounds/tom-2.mp3");
         sound.play();
         break;
     case 's':
         var sound= new Audio("sounds/tom-3.mp3");
         sound.play();
         break;
     case 'd':
         var sound= new Audio("sounds/tom-4.mp3");
         sound.play();
         break;
     case 'j':
         var sound= new Audio("sounds/crash.mp3");
         sound.play();
         break;
     case 'k':
         var sound= new Audio("sounds/snare.mp3");
         sound.play();
         break;
     case 'l':
         var sound= new Audio("sounds/kick-bass.mp3");
         sound.play();
         break;
     default:
         break;
    }
 
    }
    
// here we are going to create a function which play correct sound either key is pressed or click
// adding button annimation
function buttonAnnimation(currentkey)
{
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    // aplly timeout function to remove annimatio
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}