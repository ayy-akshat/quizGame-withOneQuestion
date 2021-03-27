class Game
{
    readGameState()
    {
        database.ref('gameState').on('value', function(data)
        {
            gameState = data.val();
        });
    }

    async startGame()
    {
        var gameStateRef = await database.ref('gameState').once('value');
        if (gameStateRef.exists())
        {
            gameState = gameStateRef.val();
        }
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once('value');
        if (playerCountRef.exists())
        {
            playerCount = playerCountRef.val();
            player.readPlayerCount();
        }
        Player.getAllPlayers();

        qForm = new QuestionForm();
        qForm.display();
    }

    updateGameState(state)
    {
        database.ref('/').update(
            {
                gameState: state
            }
        );
    }

    updateGame()
    {
        if (playerCount >= 4)
        {
            this.updateGameState(1);
        }
    }

    showResults()
    {
        if (!allPlayers)
        {
            return;
        }

        var i = 100;
        for (var p in allPlayers)
        {
            if (parseInt(allPlayers[p].answer) == riddle.correctAnswer)
            {
                fill('green');
            }
            else
            {
                fill('red');
            }

            textSize(15);
            text(allPlayers[p].name + " answered " + allPlayers[p].answer + (player.name == allPlayers[p].name ? " (you)" : ""), 150, i);

            i += 30;
        }

        fill('blue');
        text("Correct answer: '" + riddle.answers[riddle.correctAnswer-1] + "'", 120, i+50);
        text("People who answered correctly are in green.", 120, i+70);
    }
}