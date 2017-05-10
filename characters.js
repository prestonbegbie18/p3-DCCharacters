var characterArray = ["Batman", "Red Hood", "Superman", "The Joker"];
var currentIndex;

function randSelection()
{
  var randIndex;
  randIndex = randomUpTo(characterArray.length - 1);
  while(currentIndex == randIndex)
  {
    randIndex = randomUpTo(characterArray.length - 1);
  }
  currentIndex = randIndex;
  if(randIndex == 0)
  {
    window.location.href="batman.html";
  }
  else if(randIndex == 1)
  {
    window.location.href="redhood.html";
  }
  else if(randIndex == 2)
  {
    window.location.href="superman.html";
  }
  else if(randIndex == 3)
  {
    window.location.href="joker.html";
  }
}


function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}

function characterSelection()
{
  var selection = document.getElementById("characterName").value;
  if(selection == "Batman")
  {
    window.location.href="batman.html";
  }
  else if(selection == "Red Hood")
  {
    window.location.href="redhood.html";
  }
  else if(selection == "Superman")
  {
    window.location.href="superman.html";
  }
  else if(selection == "The Joker")
  {
    window.location.href="joker.html";
  }
  else
  {
    document.getElementById("error").innerHTML = "That character might not exist here."
  }
}

function goHome()
{
  window.location.href="index.html";
}
