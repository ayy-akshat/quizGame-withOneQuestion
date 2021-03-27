class Player
{
    constructor()
    {
        this.index = null;
        this.name = null;
        this.answer = null;
    }

    readPlayerCount()
    {
        database.ref('playerCount').on('value', function(data)
        {
            playerCount = data.val();
            if (playerCount >= 4)
            {
                game.updateGameState(1);
            }
        });
    }

    updatePlayerCount(count)
    {
        database.ref('/').update(
            {
                playerCount: count
            }
        );
    }

    static getAllPlayers()
    {
        database.ref('players').on('value', function(data)
        {
            allPlayers = data.val();
        })
    }
    
    update()
    {
        var playerIndex = 'players/player' + this.index;
        database.ref(playerIndex).set(
            {
                name: this.name,
                answer: this.answer
            }
        );
    }
}