var usedGroups = []; //global

function generateCards(boardType){
    usedGroups = [];

    var easy = objectiveData.filter(e => e.difficulty == 1);
    var med = objectiveData.filter(e => e.difficulty == 2);
    var hard = objectiveData.filter(e => e.difficulty == 3);
    var vhard = objectiveData.filter(e => e.difficulty == 4);
    var insane = objectiveData.filter(e => e.difficulty == 5);
    var impossible = objectiveData.filter(e => e.difficulty == 6);

    var houseDifficultyEasy = [
        "hard", "vhard", "fixed", "vhard", "hard",  //rank 9
        "hard", "hard", "vhard", "hard", "hard",    //rank 8
        "hard", "hard", "hard", "hard", "hard",     //rank 7
        "med", "hard", "hard", "hard", "med",       //rank 6
        "med", "med", "hard", "med", "med",         //rank 5
        "med", "med", "med", "med", "med",          //rank 4
        "easy", "med", "med", "med", "easy",        //rank 3
        "easy", "easy", "med", "easy", "easy",      //rank 2
        "fixed", "easy", "fixed", "easy", "fixed"   //rank 1
    ];
    
    var houseDifficultyHard = [
        "vhard", "insane", "fixed", "insane", "vhard",  //rank 9
        "insane", "insane", "impossible", "insane", "insane",    //rank 8
        "vhard", "vhard", "insane", "vhard", "vhard",     //rank 7
        "hard", "hard", "vhard", "hard", "hard",       //rank 6
        "med", "hard", "hard", "hard", "med",         //rank 5
        "med", "med", "hard", "med", "med",          //rank 4
        "easy", "med", "med", "med", "easy",        //rank 3
        "easy", "easy", "med", "easy", "easy",      //rank 2
        "fixed", "easy", "fixed", "easy", "fixed"   //rank 1
    ];

    var houseDifficulty = houseDifficultyHard

    var newBoard = [];
    newBoard[40] = "Open West Gate";
    newBoard[42] = "START";
    newBoard[44] = "Open Orchard Gate";
    newBoard[2] = "GOAL";

    var randomOrder = [];
    for (var i = 0; i < 45; i++) randomOrder.push(i);
    randomOrder = shuffle(randomOrder);

    //bring vhard squares to front
    randomOrder.splice(randomOrder.indexOf(1), 1);
    randomOrder.splice(randomOrder.indexOf(3), 1);
    randomOrder.splice(randomOrder.indexOf(7), 1);
    randomOrder.unshift(7, 1, 3);

    for (let j = 0; j < 45; j++) {
        const currentSquare = randomOrder[j];
        currentDifficulty = houseDifficulty[currentSquare];

        switch (currentDifficulty) {
            case "easy":
                newBoard[currentSquare] = drawCard(easy);
                break;
            case "med":
                newBoard[currentSquare] = drawCard(med);
                break;
            case "hard":
                newBoard[currentSquare] = drawCard(hard);
                break;
            case "vhard":
                newBoard[currentSquare] = drawCard(vhard);
                break;
            case "insane":
                newBoard[currentSquare] = drawCard(insane);
                break;
            case "impossible":
                newBoard[currentSquare] = drawCard(impossible);
                break;
            default:
                break;
        }
    }

    if(boardType == "bingosync"){
        var rank10 = ["N/A", "N/A", "N/A", "N/A", "N/A"];  
        var board1 = newBoard.slice(20)
        var board2 = rank10.concat(newBoard.slice(0, 20));

        var output1 = makeBingoSyncCard(board1);
        var output2 = makeBingoSyncCard(board2);
        var output = [output1, output2];
    }
    else if(boardType == "bquest"){
        var output = makeBingoSyncCard(newBoard);
    }

    return output;
}

function drawCard(stack){
    var randomSpot = Math.floor(Math.random() * stack.length);
    var selectedCard = stack[randomSpot];
    stack.splice(randomSpot, 1);

    if(selectedCard.group != null){
        var group = selectedCard.group;
        if(usedGroups.find(x => x == group) != null){
            return drawCard(stack);
        }
        usedGroups.push(group);
    }

    return selectedCard.name;
}

function makeBingoSyncCard(stack){
    var tempArray = [];

    stack.forEach(x => {
        var tempSquare = '{"name": "' + x + '"}';
        tempArray.push(tempSquare);
    });
    
    var output = '[';
    output = output + tempArray.join(",");
    output = output + ']';
    
    return output;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
