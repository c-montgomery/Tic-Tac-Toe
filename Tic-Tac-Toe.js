const Gameboard = (() => {
    const main = document.querySelector('main');
    const board = ['', '', '', '', '', '', '', '', ''];
    const markSquare = function (e) {
        console.log(e)
        let boardArray = document.querySelectorAll('div')
        if (Controller.currentTurn == 'player1') {
            e.target.innerText = Controller.player1.marking
        }
    }
    const createBoxes = () => {
        let count = 0
        board.forEach((box) => {
            let square = document.createElement('div');
            square.addEventListener('click', Gameboard.markSquare)
            square.textContent = `i${count}`;
            square.style.lineHeight = '200px'
            square.style.fontSize = '100px';
            square.index = count;
            Gameboard.board[count] = square
            main.appendChild(square)
            count++

        })
    };
    return {
        board,
        markSquare,
        createBoxes,
    }
})()


const Player = (playerName, symbol) => {
    // const currentTurn = Play.turn
    const marking = symbol;
    const name = playerName;
    return { name, marking }
}

const Controller = (() => {
    const player1 = Player('jeff', 'O');
    const player2 = Player('Gary', 'X');
    const startGame = () => Gameboard.createBoxes()
    const currentTurn = 'player1';

    return {
        currentTurn,
        player1,
        player2,
        startGame
    }
})()


Controller.startGame()
console.log(Controller.player1.marking)