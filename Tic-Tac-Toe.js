const Gameboard = (() => {
    const main = document.querySelector('main');
    const board = ['', '', '', '', '', '', '', '', ''];
    const markSquare = function (e) {
        console.log(e)
        let boardArray = document.querySelectorAll('div')
        if (Controller.currentTurn == 'player1') {
            e.target.innerText = Controller.player1.marking
            Controller.changeTurn()
        }else{
            e.target.innerText = Controller.player2.marking
            Controller.changeTurn()
        }
    }
    const createBoxes = () => {
        let count = 0
        board.forEach((box) => {
            let square = document.createElement('div');
            square.addEventListener('click', Gameboard.markSquare)
            square.style.lineHeight = '200px'
            square.style.fontSize = '100px';
            square.index = count;
            Gameboard.board[count] = square
            main.appendChild(square)
            count++

        }) 
    };
    const isWinner = () =>{
        if (Gameboard.board[0].innerText == Gameboard.board[1].innerText && Gameboard.board[2].innerText == Gameboard.board[1].innerText){
            console.log('winner');
            return Gameboard.board[0].innerText
        }else if (Gameboard.board[3].innerText == Gameboard.board[4].innerText && Gameboard.board[4].innerText == Gameboard.board[5].innerText){
            console.log('winner');
            return Gameboard.board[3].innerText
        }else if (Gameboard.board[6].innerText == Gameboard.board[7].innerText && Gameboard.board[7].innerText == Gameboard.board[8].innerText){
            console.log('winner');
            return Gameboard.board[6].innerText
        }else if (Gameboard.board[2].innerText == Gameboard.board[5].innerText && Gameboard.board[5].innerText == Gameboard.board[8].innerText){
            console.log('winner');
            return Gameboard.board[2].innerText
        }else if (Gameboard.board[1].innerText == Gameboard.board[4].innerText && Gameboard.board[4].innerText == Gameboard.board[7].innerText){
            console.log('winner');
            return Gameboard.board[1].innerText
        }else if (Gameboard.board[0].innerText == Gameboard.board[3].innerText && Gameboard.board[3].innerText == Gameboard.board[6].innerText){
            console.log('winner');
            return Gameboard.board[0].innerText
        }else if (Gameboard.board[0].innerText == Gameboard.board[4].innerText && Gameboard.board[4].innerText == Gameboard.board[8].innerText){
            console.log('winner');
            return Gameboard.board[0].innerText
        }else if (Gameboard.board[6].innerText == Gameboard.board[4].innerText && Gameboard.board[4].innerText == Gameboard.board[2].innerText){
            console.log('winner');
            return Gameboard.board[6].innerText
        }
    }
    return {
        board,
        markSquare,
        createBoxes,
        isWinner,
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
    let currentTurn = 'player1';
    const changeTurn = () => {
        if(Controller.currentTurn =='player1'){
            Controller.currentTurn = 'player2'
        } else{
            Controller.currentTurn = 'player1'
        }
    }

    return {
        currentTurn,
        changeTurn,
        player1,
        player2,
        startGame
    }
})()


Controller.startGame()
console.log( )