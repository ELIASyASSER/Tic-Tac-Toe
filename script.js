let cells = document.querySelectorAll(".cell");
let reset = document.getElementById("reset");
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let board = ['','','','','','','','',''];
let currentPlayer = 'X';
let isGameOver = false;


cells.forEach(cell=>{
    cell.addEventListener("click",handleClick)
})
reset.addEventListener("click",resetting)
function handleClick(e) {
    let index = e.target.dataset.index;
    if(board[index]=="" || !isGameOver){
        board[index] = currentPlayer;
        e.target.textContent = currentPlayer

        if(checkWin()){
            setTimeout(() => {
                alert(`${currentPlayer} wins ` )
                resetting()
            }, 1000);
            isGameOver = true;
            

        }
        else if(board.every(item=>item !="")){
            setTimeout(() => {
                alert('DRAW !!' )
                resetting()

                
            }, 1000);
            isGameOver = true;

        }
        else{
            currentPlayer = currentPlayer ==='X'?'O':'X';
        }
    }

    
    
    
}
function resetting() {
    
    board = ['','','','','','','','',''];
    currentPlayer = 'X';
    isGameOver = false;
    cells.forEach(element => {
        element.textContent = ''
        element.style.backgroundColor = 'white'
    });

}
function checkWin() {
     // return winningCombos.some((combo)=>{
    // return combo.every((el)=>board[el] == currentPlayer)
    // })
    for (const combo of winningCombos) {
        const [a,b,c] = combo;
        if(board[c] == currentPlayer && board[a]==board[b]&& board[a]==board[c]){
            cells.forEach(cell=>{
                cells[a].style.backgroundColor = 'rgb(0,0,255,0.5)'
                cells[b].style.backgroundColor = 'rgb(0,0,255,0.5)'
                cells[c].style.backgroundColor = 'rgb(0,0,255,0.5)'
            })
            return true;

        }
    }
}
