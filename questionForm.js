class QuestionForm
{
    constructor()
    {
        this.question = createElement('h3');
        
        this.answer1 = createElement('h4'),
        this.answer2 = createElement('h4'),
        this.answer3 = createElement('h4'),
        this.answer4 = createElement('h4');

        this.nameInput = createInput('name');
        this.answerInput = createInput('answer');

        this.submitButton = createButton('Submit');

        this.allElements = [
            this.question,
            this.answer1,
            this.answer2,
            this.answer3,
            this.answer4,
            this.nameInput,
            this.answerInput,
            this.submitButton
        ];
    }

    display()
    {
        this.question.html(riddle.question);
        this.question.position(20, 40);

        this.answer1.html(riddle.answers[0]);
        this.answer2.html(riddle.answers[1]);
        this.answer3.html(riddle.answers[2]);
        this.answer4.html(riddle.answers[3]);

        this.answer1.position(60, 80);
        this.answer2.position(60, 120);
        this.answer3.position(60, 160);
        this.answer4.position(60, 200);

        this.nameInput.position(100, 300);
        this.answerInput.position(300, 300);

        this.submitButton.position(500, 300);

        this.submitButton.mousePressed(() =>
        {
            if (gameState == 1)
            {
                return;
            }
            
            playerCount++;
            player.index = playerCount;
            player.updatePlayerCount(playerCount);
            player.name = this.nameInput.value();
            player.answer = this.answerInput.value();
            player.update();
            player.name = null;
            player.answer = null;
            player.index = null;
            player.answered = true;
        });
    }

    show()
    {
        for (var i in this.allElements)
        {
            this.allElements[i].show();
        }
    }
    
    hide()
    {
        for (var i in this.allElements)
        {
            this.allElements[i].hide();
        }
    }
}