const Board = require('./board')



// test build board 
describe('Board',()=> {
    test('board body 10 x 10 grid', ()=>{
    const board = Board()
     expect(board.body).toStrictEqual(
        [
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
        ]
        )
    })  
})


// test place ship 

describe('Board',()=> {
    test('board body 10 x 10 grid', ()=>{
    const board = Board()
    board.placeShip(10,[9,0],2)
    ship = board.ships[0];
    expect(ship.head).toStrictEqual([9,0])
    expect(board.body).toStrictEqual(
        [
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['2','2','2','2','2','2','2','2','2','2'],
        ]
        )
    })  
})


// test place ship out of board

describe('Board',()=> {
    test('Place out of board', ()=>{
    const board = Board()
    
     expect(board.placeShip(5,[0,6])).toBe(
        null
        )
     // this can be placed in the board
     expect(board.placeShip(3,[2,7])).toBeUndefined()
    })  
})


// test ship is already there 
describe('Ships cannot be overplaced',()=> {
    test('Ship is already there', ()=>{
    const board = Board()
    board.placeShip(10,[9,0])
     expect(board.placeShip(3,[9,5])).toBe(
        null
        )
     // this can be placed in the board
     expect(board.placeShip(3,[2,7])).toBeUndefined()
    })  
})

// test received attack 
describe('Receive Attack',()=> {
    test('open space is attacked', ()=>{
    const board = Board()
    board.placeShip(4,[1,0],0)
    board.receiveAttack(1,3)
    board.receiveAttack(5,5)
    board.receiveAttack(1,2)
    board.receive
    expect(board.body).toStrictEqual(
        [
            ['','','','','','','','','',''],
            ['0','0','X','X','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','X','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
        ]
        )
    // check if hit is recorded right 
    expect(board.ships[0].body).toStrictEqual(['','','hit','hit'])
    })  
    
})

// test gameover
describe('Gameover',()=> {
    test('Gameover works', ()=>{
    const board = Board()
    board.placeShip(3,[7,1],0)
    board.placeShip(3,[0,0],1)
    //before attack
    expect(board.gameover()).toBe(false)
    //after attack
    board.receiveAttack(7,1)
    board.receiveAttack(7,2)
    board.receiveAttack(7,3)

    board.receiveAttack(0,0)
    board.receiveAttack(0,1)
    board.receiveAttack(0,2)
    console.log(board.body)
    expect(board.gameover()).toBe(true)
    
})
})
