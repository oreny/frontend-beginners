"use strict";

function getLeftValueForImage(images, widths, index) {
    return index === 0 ? 0 : -[...Array(index).keys()].map(i => widths[i]).reduce((a, b) => a + b);
}

function getFastestCar(cars) {
    return cars.reduce((a, b) => a.speed > b.speed ? a : b);
}

function isTicTacToeWinner(board) {
    const vectors = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const c = board.flatMap(a => a);
    const possibleWins = [...board, ...vectors.map(a => [c[a[0]], c[a[1]], c[a[2]]])];
    return  possibleWins.map(p => p.every(v => v === p[0] && v !== ' ')).some(a => a);
}

function play(cards, index) {
    const visibleCard = cards.find(a => a.visible);
    const playedCard = cards[index];
    if (visibleCard === undefined) {
        playedCard.visible = true;
    } else {
        playedCard.visible = false;
        visibleCard.visible = false;
        playedCard.found = visibleCard.found = (playedCard.value === visibleCard.value);
    }
}

