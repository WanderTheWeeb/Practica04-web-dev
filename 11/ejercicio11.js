let arrOfEvens = [2, 4, 6, 8, 10];
let arrOfOdds = [1, 3, 5, 7, 9];

let arrOfSums = [];

for (let i = 0; i < arrOfEvens.length; i++) {
    arrOfSums.push(arrOfEvens[i] + arrOfOdds[i]);
}

alert(arrOfSums);