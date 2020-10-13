
"use strict";

const prompt = require('prompt-sync')({sigint: true});

function random(a, b) {
    return a + Math.floor(Math.random() * (b - a));
}

function sumOfDigits(num) {
    var result = 0;
    while (num > 0) {
        result += num % 10;
        num = Math.floor(num/10);
    }
    return result;
}

function playBingo() {
    var target = random(1, 100);
    var guess = 0;
    while (guess !== target) {
        guess = Number(prompt("your guess: "));
        var msg = guess < target ? "too small" : guess > target ? "too big" : "bingo";
        console.log("Message: " + msg);
    }
}

console.log(random(20, 80));
console.log(sumOfDigits(1432));
playBingo();