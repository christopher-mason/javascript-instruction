function countChar(str, char) {
    let total = 0;
     for (let i = 0; i < str.length; i++) {
      if (str[i] == char) {
        total++;
      }
     }
     return total;
   }
   
   function countBs(str) {
     return countChar(str, "B");
   }
   
   console.log(countBs("BBC"));
   
   console.log(countChar("kakkerlak", "k"));