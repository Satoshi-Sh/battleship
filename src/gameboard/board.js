const Ship = require('../ship/ship')


// 10 x 10 grid 

function makeBoard() {
    const ls = []
        for (let i=0; i<10;i++){
        ls.push(Array(10).fill(''))
        }
        return ls
}

const Board = function(){
    return {
    ships:[],
    body: makeBoard(),
    placeShip: function(length,[row,col],id=1) {
       const ship = Ship(length,id);
       this.ships.push(ship)
       // out of board
       if (col +length>10){
        console.log('The ship cannot be placed on the board')
        return null;
       }
       // ship is already there 
       for (let i =0; i<length;i++){
         if (this.body[row][col+i]!= ''){
         console.log('The ship is already there')
         return null; }
        }


       ship.setHead([row,col])
       for (let i=0; i <length;i++){
      this.body[row][col+i]= id.toString()
      }
    },

    receiveAttack: function(row,col){
    
        if (this.body[row][col]!=''){
            const index = parseInt(this.body[row][col])
            console.log(index)
            const ship = this.ships[index]
            ship.hit( col- ship.head[1])
        }
        this.body[row][col]='X'
    },
    gameover: function(){
       const shipNum = this.ships.length 
       let counter = 0;
       this.ships.forEach(ship=>{
       if(ship.isSunk()){
        counter++
       }
    })
    return counter == shipNum
    }
}
}

module.exports = Board