const Player = function(cpu=false){
    return {
        cpu:cpu,
        chooseMove: function(board){
        if (cpu){
            // position next to H
            let neighbors=[]
            //choose a move randomly from the available moves
            let ls = []
            for (let i =0; i<10; i++){
                for (let j=0; j<10; j++){
                if (board.body[i][j]=='H'){
                    if (j+1<10 ){
                        if (board.body[i][j+1]!='X' &board.body[i][j+1]!='H'){
                    neighbors.push([i,j+1])
                        }
                    }
                    if (j-1>0){
                        if (board.body[i][j-1]!='X' & board.body[i][j-1]!='H'){
                        neighbors.push([i,j-1])
                        }
                        }
                }
                if (board.body[i][j]!='X' & board.body[i][j]!='H'){
                    ls.push([i,j])
                }
            }
            }
            
            if (neighbors.length>0){
                const move = neighbors[Math.floor(Math.random() * neighbors.length)]
                return move
            }
            const move = ls[Math.floor(Math.random() * ls.length)];
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