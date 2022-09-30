const Ship = require('./ship')

// test length 
describe('Creation',()=> {
    test('Create ship with 7', ()=>{
    const ship = Ship(7)
     expect(ship.body).toStrictEqual(['','','','','','',''])
    })  
})


// test hit 
describe('Hit',()=> {
    test('Hit index 0 and 3', ()=>{
    const ship = Ship(7)
    ship.hit(0)
    ship.hit(3)
     expect(ship.body).toStrictEqual(['hit','','','hit','','',''])
    })  
})

// test isSunk

describe('isSunk',()=> {
    test('is Sunk', ()=>{
    const ship = Ship(7)
    for (let i=1; i<ship.length+1; i++){
        ship.hit(i)
    }
     expect(ship.isSunk()).toBe(true)
    })  
})
