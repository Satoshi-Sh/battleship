const Ship = function(length,id=0){
    return {
    length:length,
    head: null,
    setHead: function(position){
        this.head = position
    },
    id: id,
    body: Array(length).fill(''),
    hit: function(number){
        if (number>length| number <0){
            console.log(`Out of range(1-9))`)
            return;
        }
        this.body[number]='hit'
    },
    isSunk: function(){
        let count = 0;
        for (let i of this.body){
        if (i =='hit'){
            count++;
        }
        }
        return count == length;
    } 
    }
}


module.exports = Ship