var database;
var dbRef;

var game, player, qForm;

var playerCount, gameState;

var allPlayers;

var isDone = false;

const riddle = 
{
  question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
  answers: [
    '1 • Wind',
    '2 • Breath',
    '3 • Echo',
    '4 • Fire'
  ],
  correctAnswer: 3
};


function setup()
{
  createCanvas(850,400);

  database = firebase.database();
  game = new Game();
  game.readGameState();
  game.startGame();
}


function draw()
{
  background("pink");

  if (gameState == undefined || playerCount == undefined)
  {
    push();
    textAlign(CENTER)
    textSize(30);
    fill('black');
    text('Loading...', width/2, height/2);
    pop();
  }
  else
  {
    push();
    fill('black');
    textSize(20);
    text("Players that answered: " + playerCount + "/4", 20, 30);
    pop();

    if (gameState == 1)
    {
      isDone = true;
      if (qForm)
      {
        qForm.hide();
        game.showResults();
      }
    }
    else if (player.answered == true)
    {
      qForm.hide();

      push();
      textSize(30);
      textAlign(CENTER);
      text("Waiting for other players to answer...", width/2, height/2);
      textSize(15);
      text("If you are stuck on this and the page keeps reloading, just wait a few seconds or close and reopen the tab.", width/2, height*(3/4));
    }
    else
    {
      if (qForm)
      {
        qForm.show();
      }
    }

    if (gameState == 0 && isDone)
    {
      location.reload();
    }
  }
  text(gameState, 10, 100);
  text(playerCount, 10, 120);
  text(isDone, 10, 140);
}
