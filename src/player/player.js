const Player = function(cpu=false){
    return {
        cpu:cpu,
        chooseMove: function(board){
        if (cpu){
            //choose a move randomly from the available moves
            let ls = []
            for (let i =0; i<10; i++){
                for (let j=0; j<10; j++)
                if (board.body[i][j]!='X'){
                    ls.push([i,j])
                }
                
            }
            const move = Math.floor(Math.random() * ls.length);
            return move
        } 
        else {
            const move = prompt("Enter you move from available space. ex [1,2]")
            return move
        }       
        }

    }
}


module.exports = Player