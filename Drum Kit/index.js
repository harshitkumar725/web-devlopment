var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var but = this.innerHTML;
    makeSound(but);
    changeAnimation(but);
  });
}

document.addEventListener("keypress",function (event){
  makeSound(event.key);
  changeAnimation(event.key);
});
function changeAnimation(but)
{
  var str = '.'+but;
  document.querySelector(str).classList.add("pressed");
  setTimeout(function (){
      document.querySelector(str).classList.remove("pressed");
  },100);
}
function makeSound(but)
{var str = "";
switch (but) {
  case 'w':
    str = "tom-1.mp3";
    break;
  case 'a':
    str = "tom-2.mp3";
    break;
  case 's':
      str = "tom-3.mp3";
      break;
  case 'd':
        str = "tom-4.mp3";
        break;
  case 'j':
      str = "snare.mp3";
      break;
  case 'k':
        str = "crash.mp3";
        break;
  case 'l':
          str = "kick-bass.mp3";
          break;
}

var audio = new Audio("sounds/"+str);
audio.play();}
