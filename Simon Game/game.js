

var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level =0;
var x=true;
$(".btn").click(function(){
  var userchosencolour=$(this).attr("id");
  userClickedPattern.push(userchosencolour);
  playSound(userchosencolour);
  animatePress(userchosencolour);
  checkAnswer(userClickedPattern.length-1);
});


function nextSequence(){
  userClickedPattern=[];
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level=level+1;
  $("h1").text("Level "+level);

}
function playSound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColour){
  $("#" +currentColour).addClass("pressed");
  setTimeout(function() {
    $('#' + currentColour).removeClass("pressed");
}, 100);
}

  $(document).keypress(function(){
    if(x===true)
    {
    $("h1").text("Level "+level);
    nextSequence();
    x=false;
  }
})
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){

    if(gamePattern.length===userClickedPattern.length){
      setTimeout(function(){
        nextSequence()
      },1000);
    }
  }
  else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}
function startOver()
{
  level=0;
  gamePattern=[];
  x=true;
}
