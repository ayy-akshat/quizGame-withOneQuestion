var database;
var dbRef;

var game, player, qForm;

var playerCount, gameState;

var allPlayers;

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
    }
    else
    {
      if (qForm)
      {
        qForm.show();
      }
    }
  }
}
