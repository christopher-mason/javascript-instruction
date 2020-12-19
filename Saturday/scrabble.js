let tiles = [
    { tile: "N", score: 1, bonus: 3 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8, bonus: 5 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
];

function maximumScore(hand) {
    let total = 0;
    
    for (let tile of hand) {
        // console.log(tile.score, tile.bonus)
        total += tile.score;
        if (tile.bonus != undefined) {
            total += tile.bonus;
        }
    }

    return total;
}

let total = maximumScore(tiles);
console.log(total);

total = maximumScore([{tile: 'B', score: 2}, 
    {tile: 'V', score: 4},  
    {tile: 'F', score: 4}, 
    {tile: 'U', score: 1}, 
    {tile: 'D', score: 2}, 
    {tile: 'O', score: 1}, 
    {tile: 'U', score: 1}]), 15;
console.log(total);