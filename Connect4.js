var currentPlayer = "black"
//var nextPlayer = "Red";
var playerBlackSelections = new Array();
var playerRedSelections = new Array();
var map = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

handlClick = function (event) {
    var cell = event.target
    console.log(cell.id)

    var column = ((cell.id) % 7)
   // console.log(map);
    for (var row = 5; row >= 0; row--) {
        if (map[row][column] == 0) {

            map[row][column] = currentPlayer;

            cell = document.getElementById(row * 7 + column)
           let checker = document.createElement("div")
            checker.classList.add("checker", currentPlayer) 
                cell.appendChild(checker)


            if (currentPlayer === "black") {
                playerSelections = playerBlackSelections;
                nextPlayer = "red";
            } else {
                playerSelections = playerRedSelections;
                nextPlayer = "black";
            }
            //console.log(cell.id)
            playerSelections.push(parseInt(cell.id));


            if (checkWinner(playerSelections)) {
                alert("Player " + currentPlayer + " wins!")
                resetGame();
            }

            // Swap players
            currentPlayer = nextPlayer;
            break;
        }
    }
}
var cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handlClick)
}

function checkWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        let matches = 0;
        for (let j = 0; j < winningCombinations[i].length; j++) {
            if (playerSelections.includes(winningCombinations[i][j])) {
                matches++;
            }
            //console.log("matches " + matches)


        }
        if (matches == 4) {
            return true;
        }

    }
}
