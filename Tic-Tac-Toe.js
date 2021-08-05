const Gameboard = (() =>{
    const main = document.querySelector('main')
    const board = ['','','','','','','','',''];
    const markSquare = function (e){
        console.log(e)
        let boardArray = document.querySelectorAll('div')
        // e.target.innerText = current.marking
    }
    const createBoxes = () => {
        let count = 0
        board.forEach((box)=>{
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
    return{
        board,
        markSquare,
        createBoxes,
    }
})()


const Player = (playerName, symbol)=>{
    // const currentTurn = Play.turn
    const marking = symbol;
    const name = playerName;
    return {name, marking}
}


const player1 = Player('jeff', 'O')
const player2 = Player('Gary', 'X')
Gameboard.createBoxes()
console.log(Player.currentPlayer)
console.log(Gameboard.board[1])