const gridChanger = document.querySelector('#change-grid');
const btnContainer = document.querySelector('.inner-container');
const validationPattern = /^(3|4|5)$/;
const reset=document.querySelector('.reset')

let currentTarget = 'X';
let board = []; // 2D array to represent the board

function Makegrid({ value = 3 }) {
    if (!validationPattern.test(value)) {
        gridChanger.value = "";
        return;
    }
    btnContainer.innerHTML = "";
    board = Array.from({ length: value }, () => Array(value).fill("")); // Initialize board
    console.log(board)
    const fragment = document.createDocumentFragment();
    btnContainer.style.gridTemplateColumns = `repeat(${value}, 70px)`;
    
    for (let i = 0; i < value * value; i++) {
        const btn = document.createElement('button');
        btn.classList.add('click-btn');
        btn.dataset.index = i; // Store index for reference
        fragment.appendChild(btn);
    }
    btnContainer.appendChild(fragment);
}
reset.addEventListener('click',()=>{
    const data=[...btnContainer.children];
    data.forEach((e)=>{
        e.innerHTML="";
    })
    Makegrid({});
})
gridChanger.addEventListener('input', () => {
    Makegrid({ value: gridChanger.value });
});
Makegrid({});

function updateBoard() {
    const buttons = document.querySelectorAll('.click-btn');
    const size = Math.sqrt(buttons.length);
    
    buttons.forEach((btn, index) => {
        const row = Math.floor(index / size);
        const col = index % size;
        board[row][col] = btn.innerHTML.replace(/<\/?b>/g, ""); // Update board state
    });
}

function checkWin() {
    const size = board.length;
    console.log(size)
    const lines = [];

    // Horizontal and Vertical lines
    for (let i = 0; i < size; i++) {
        lines.push(board[i]); // Horizontal
        lines.push(board.map(row => row[i])); // Vertical
    }

    // Diagonals
    lines.push(board.map((row, i) => row[i])); // Top-left to bottom-right
    lines.push(board.map((row, i) => row[size - i - 1])); // Top-right to bottom-left

    for (const line of lines) {
        if (line.every(cell => cell === 'X')) return 'X';
        if (line.every(cell => cell === 'O')) return 'O';
    }

    return null;
}

function gameLogic(e) {
    if (e.target.classList.contains('click-btn')) {
        const btn = e.target;

        if (btn.innerHTML === '') {
            btn.innerHTML = `<b>${currentTarget}</b>`;
            updateBoard();

            const winner = checkWin();
            if (winner) {
                console.log(`${winner} has won!`);
                btnContainer.removeEventListener('click', gameLogic); // Disable further moves
                // Optionally reset the game or disable further moves
            } else if (board.flat().every(cell => cell !== "")) {
                console.log("It's a draw!");
                btnContainer.removeEventListener('click', gameLogic); // Disable further moves
                // Optionally reset the game or disable further moves
            } else {
                // Toggle turn
                currentTarget = currentTarget === 'X' ? 'O' : 'X';
            }
        }
    }
}

btnContainer.addEventListener('click', gameLogic);


// const gridChanger=document.querySelector('#change-grid');
// const btnContainer=document.querySelector('.inner-container')
// const validationPattern=/^(3|4|5)$/;

// let currentTarget='X'

// function Makegrid({value=3}){
//     if(!validationPattern.test(value)){
//         gridChanger.value="";
//         return;
//     }
//     btnContainer.innerHTML="";

//     const fragment = document.createDocumentFragment();

//     btnContainer.style.gridTemplateColumns=`repeat(${value},70px)`
//     for(let i=1;i<=value*value;i++){
//         const btn=document.createElement('button');
//         btn.classList.add('click-btn')
//         fragment.appendChild(btn)
//     }
//     btnContainer.appendChild(fragment);

//         const button=document.querySelectorAll('.click-btn')
//          console.log(button)
// }

// gridChanger.addEventListener('input',()=>{
//     Makegrid({value:gridChanger.value})

// })
// Makegrid({});

// //?let's use event deligation
// function gameLogic(e){
    
//     if(e.target.classList.contains('click-btn')){
//        const btn=e.target;

//        if(btn.innerHTML===''){
//           btn.innerHTML=`<b>${currentTarget}</b>`

//           currentTarget=currentTarget==='X'? 'O':'X';
//        }
//     }
// }
// btnContainer.addEventListener('click',gameLogic)


