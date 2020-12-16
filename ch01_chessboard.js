// let size = " # " + "# " + "# " + "#"+"\n" + "# " + "# " + "# " + "#";
// console.log(size, "\n" +size,"\n"+ size,"\n"+ size);

function makeBoard(size) {
    let board = "";
    for (let i = 0; i < size; ++i) {
      let char = (i % 2 == 0) ? " " : "#";
     for (let j = 0; j < size; ++j) {
       board += char;
        if (char == " ") {
         char = "#"; 
        } else {
         char = " "; 
        }
     }
      board += "\n";
    }
     return board;
   }
   console.log(makeBoard(8));
