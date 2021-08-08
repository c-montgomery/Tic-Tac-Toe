const Gameboard = (() => {
    const isStarted = false;
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    body.style.display = 'flex';
    body.style.flexDirection = 'row';
    const board = ['', '', '', '', '', '', '', '', ''];

    const markSquare = function (e) {
        if (Gameboard.isStarted == true && e.target.innerText != 'O'&& e.target.innerText != 'X' ){
            let boardArray = document.querySelectorAll('div')
            if (Controller.currentTurn == 'player1') {
                e.target.innerText = Controller.player1.marking
                Controller.changeTurn()
            } else {
                e.target.innerText = Controller.player2.marking
                Controller.changeTurn()
            }
            if (isWinner() == 'X' || isWinner() == 'O') {
                console.log('theres a real winner')
                let modal = document.createElement('div')
                modal.className = 'modal'
                modal.innerText = 'FUCK'
                destroyBoxes();
                displayWinner()
            }
        }
    }

    const displayWinner = () => {
        let winner = document.createElement('div');
        winner.style.fontSize = '50px';
        winner.textContent = 'Winner is ' + isWinner() + '!';
        winner.style.width = '100%';
        winner.style.display = 'block';
        body.style.display = 'block'

        main.remove();
        body.appendChild(winner);
        body.style.flexDirection = 'column';
        body.style.textAlign = 'center';
        let playAgainButton = document.createElement('button');
        body.appendChild(playAgainButton);
        playAgainButton.textContent = 'Play again?';
        playAgainButton.style.marginTop = '10px'
        playAgainButton.addEventListener('click', function(){
            console.log('destroying boxes')
            Gameboard.destroyBoxes();
            let main = document.createElement('button')
            
            body.appendChild(main)
            Controller.startGame();
            body.style.flexDirection = 'row'
            playAgainButton.remove();
        })
    }

    const destroyBoxes = () => {
        
        while (main.firstChild) {
            main.removeChild(main.firstChild)
        }
        let sidebox = document.querySelector('div');
        sidebox.remove()
        body.appendChild(main)
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
    const activateBoardBoxes = (bool) => {
        Gameboard.isStarted = bool
    }
    const getBody = () => body
    const getMain = () => main
    
    const isWinner = () => {
        if (Gameboard.board[0].innerText == Gameboard.board[1].innerText && Gameboard.board[2].innerText == Gameboard.board[1].innerText) {
            return Gameboard.board[0].innerText
        } else if (Gameboard.board[3].innerText == Gameboard.board[4].innerText && Gameboard.board[4].innerText == Gameboard.board[5].innerText) {
            return Gameboard.board[3].innerText
        } else if (Gameboard.board[6].innerText == Gameboard.board[7].innerText && Gameboard.board[7].innerText == Gameboard.board[8].innerText) {
            return Gameboard.board[6].innerText
        } else if (Gameboard.board[2].innerText == Gameboard.board[5].innerText && Gameboard.board[5].innerText == Gameboard.board[8].innerText) {
            return Gameboard.board[2].innerText
        } else if (Gameboard.board[1].innerText == Gameboard.board[4].innerText && Gameboard.board[4].innerText == Gameboard.board[7].innerText) {
            return Gameboard.board[1].innerText
        } else if (Gameboard.board[0].innerText == Gameboard.board[3].innerText && Gameboard.board[3].innerText == Gameboard.board[6].innerText) {
            return Gameboard.board[0].innerText
        } else if (Gameboard.board[0].innerText == Gameboard.board[4].innerText && Gameboard.board[4].innerText == Gameboard.board[8].innerText) {
            return Gameboard.board[0].innerText
        } else if (Gameboard.board[6].innerText == Gameboard.board[4].innerText && Gameboard.board[4].innerText == Gameboard.board[2].innerText) {
            return Gameboard.board[6].innerText
        }
    }
    return {
        board,
        getBody,
        getMain,
        markSquare,
        createBoxes,
        isWinner,
        destroyBoxes,
        activateBoardBoxes,
    }
})()


const Player = (playerName, symbol) => {
    const marking = symbol;
    const name = playerName;
    return { name, marking }
}

const Controller = (() => {
    const player1 = Player('jeff', 'O');
    const player2 = Player('Gary', 'X');
    const gatherNames = () => {
        const body = Gameboard.getBody();

        const inputBox = document.createElement('div')
        inputBox.style.display = 'flex';
        inputBox.style.flexDirection = 'column'
        inputBox.style.width = '30%'
        inputBox.style.display = 'inline-block'

        const buttonBox = document.createElement('div')
        buttonBox.style.display = 'flex';
        buttonBox.style.justifyContent = 'space-around'


        const label1 = document.createElement('p')
        const label2 = document.createElement('p')

        label1.textContent = 'Player 1'
        label2.textContent = 'Player 2'

        const player1Name = document.createElement('input');
        const player2Name = document.createElement('input');
        player1Name.placeholder = 'Name';
        player2Name.placeholder = 'Name';

        const startButton = document.createElement('button')
        startButton.textContent = 'Start'
        startButton.style.margin = '10px'
        startButton.addEventListener('click', () => {
            Gameboard.activateBoardBoxes(true);
            if (player1Name.value !== '' && player2Name.value !== '') {
                label1.textContent = player1Name.value + '\n vs. ' + player2Name.value;
            } else {
                console.log(label2.textContent)
                label1.textContent = label1.textContent + ' vs. ' + label2.textContent
            }
            player1Name.remove()
            player2Name.remove()
            label2.remove()
            startButton.remove()

        })

        const resetButton = document.createElement('button')
        resetButton.textContent = 'Reset'
        resetButton.style.margin = '10px'
        resetButton.addEventListener('click', function () {
            Gameboard.destroyBoxes();
            startGame();
        })

        let otherBody = Gameboard.getBody()
        otherBody.appendChild(inputBox);
        inputBox.appendChild(player1Name);
        inputBox.appendChild(label1)
        inputBox.appendChild(player2Name);
        inputBox.appendChild(label2);
        inputBox.appendChild(buttonBox);
        buttonBox.appendChild(startButton)
        buttonBox.appendChild(resetButton)


    }
    const startGame = () => {

        Gameboard.createBoxes();
        gatherNames()
    }
    const getReset = () => resetButton
    let currentTurn = 'player1';
    const changeTurn = () => {
        if (Controller.currentTurn == 'player1') {
            Controller.currentTurn = 'player2'
        } else {
            Controller.currentTurn = 'player1'
        }
    }

    return {
        currentTurn,
        changeTurn,
        player1,
        player2,
        startGame,
        getReset,
    }
})()


Controller.startGame()
console.log()