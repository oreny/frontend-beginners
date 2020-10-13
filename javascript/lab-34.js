
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

function rot13(str) {
    const aAscii = "a".charCodeAt(0);
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        result +=  c < "a" || c > "z" ? c :
            String.fromCharCode(aAscii + (c.charCodeAt(0) - aAscii + 13) % 26);
    }
    return result;
}

function isStringPassword(pwd) {
    if (pwd.length <= 7) {
        return false;
    }

    var hasLowercase = false;
    var hasUppercase = false;
    var hasNumber = false;
    var hasSpecialChar = false;

    for (let i = 0; i < pwd.length; i++) {
        var char = pwd.charAt(i);
        hasLowercase = hasLowercase || (char >= "a" && char <= "z");
        hasUppercase = hasUppercase || (char >= "A" && char <= "Z");
        hasNumber = hasNumber || (char >= "0" && char <= "9");
        hasSpecialChar = hasSpecialChar || char < "0" || char > "z" || (char > "Z" && char < "a");
    }

    return hasLowercase && hasUppercase && hasNumber && hasSpecialChar;
}

