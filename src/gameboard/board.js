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
       
       // out of board
       if (col +length>10){
        return null;
       }
       // ship is already there 
       for (let i =0; i<length;i++){
         if (this.body[row][col+i]!= ''){
         return null; }
        }

       this.ships.push(ship)
       ship.setHead([row,col])
       for (let i=0; i <length;i++){
      this.body[row][col+i]= id.toString()
      }
      return true;
    },

    receiveAttack: function(row,col){
        
        if (this.body[row][col]!='' & this.body[row][col]!='X' & this.body[row][col]!='H'){
            const index = parseInt(this.body[row][col])
            const ship = this.ships[index]
            ship.hit(col- ship.head[1])
            this.body[row][col]='H'
            
        }
        else(this.body[row][col]='X')

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
    },
    reset: function(){
        this.ships = []
        this.body = makeBoard()
    }
}
}

module.exports = Board