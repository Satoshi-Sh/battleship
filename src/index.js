import './style.css';
import './player/player';

const Ship = require('./ship/ship')
const Player = require('./player/player')
const Board = require('./gameboard/board')


const youBoard = document.querySelector('#you')
const cpuBoard =document.querySelector('#cpu')
const button = document.querySelector('button')
const restartDiv = document.querySelector('.restart-div')

let message = document.querySelector('.message')
let isReady = false;
let playerTurn=true;

// add cells to the board 
function addCells(element,name){
    for (let i =0; i<10; i++){
        for (let j=0; j<10; j++){
        const div = document.createElement('div')
        div.classList.add('cell')
        div.setAttribute('id',name)
        div.setAttribute('id',`c-${i}-${j}`)
        div.style.height='50px'
        div.style.width='50px'
        // add trigger for players field
        if (name=='youBoard'){
        div.addEventListener('click',(e=>{
        const id = e.target.id
        const row = parseInt(id.split('-')[1])
        const col= parseInt(id.split('-')[2])
        let shipLengths = [5,6,7,8,3];
        if (pBoard.ships.length<=5 & !isReady) {
            const length = shipLengths[pBoard.ships.length]
            const next = shipLengths[pBoard.ships.length +1]
            if (!next){
                message.innerText = 'CPU is plasing ships.'
            }
            else {
            message.innerText = `Place a ship with the length of ${next}`
            }
            if (!pBoard.placeShip(length,[row,col],pBoard.ships.length)){
            message.innerText= 'The ship cannot be placed. Choose another position.'
            return;
            }
            else {
                // update the  UI
                updateBoard(pBoard.body)
            }
            if (!next){
                // cpu placing ships
                let id =0
                
                while (cBoard.ships.length<5){ 
                const move = cpu.chooseMove(cBoard)

                const len = shipLengths[cBoard.ships.length]
                
                if (cBoard.placeShip(len,[move[0],move[1]],id)){
                id++}
                
                }
             isReady=true;
             message.innerText= 'Choose place to attack'
        }

        }      
        })
        )}
        // trigger for cpu field to attack
        else{
            div.addEventListener('click',(e=>{
                const id = e.target.id
                const row = parseInt(id.split('-')[1])
                const col= parseInt(id.split('-')[2])
                if (isReady & playerTurn & e.target.innerText==''){
                cBoard.receiveAttack(row,col)
                updatecBoard(cBoard.body)
                if(cBoard.gameover()){
                    console.log('Player won')
                    message.innerHTML = 'Player won!!'
                    restartDiv.style.display='flex'
                    button.onclick=reset;
                }
                else {
                // cpu choose move 
                const move = cpu.chooseMove(pBoard);
                pBoard.receiveAttack(move[0],move[1])
                updateBoard(pBoard.body)
                if(pBoard.gameover()){
                    console.log('CPU won..')
                    message.innerHTML = 'CPU won..'
                    restartDiv.style.display='flex'
                    button.onclick=reset
                }
            }
            }
            }))
        

        
        }
        element.appendChild(div)
        }
    }
}

addCells(youBoard,'youBoard');
addCells(cpuBoard,'cpuBoard');


// game setup 

const pBoard = Board()
const cBoard= Board()

const player = Player()
const cpu = Player(true)

// for player board

function updateBoard(board){
   for (let i=0;i<10;i++){
    for (let j=0;j<10;j++){
        const  h = document.querySelector(`#c-${i}-${j}`)
        h.innerText= board[i][j]
        if (board[i][j]=='H'){
        h.style.color='red';
        }
    }
   } 
}
// for cpu board
function updatecBoard(board){
    for (let i=0;i<10;i++){
     for (let j=0;j<10;j++){
         const  h = document.querySelector(`#cpu #c-${i}-${j}`)
         if (!isNum(board[i][j])){
         h.innerText= board[i][j]
         if (board[i][j]=="H"){
            h.style.color='green'
         }
         }
     }
    } 
 }


function isNum(val) {
    return parseInt(val) == val;
}


function reset(){
    youBoard.innerHTML=''
    cpuBoard.innerHTML=''
    pBoard.reset()
    cBoard.reset()
    addCells(youBoard,'youBoard');
    addCells(cpuBoard,'cpuBoard');
    restartDiv.style.display='none'
    isReady = false;
    playerTurn=true;
    message.innerText= 'Place a ship with the length of 5'
}



