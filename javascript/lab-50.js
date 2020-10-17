"use strict";

class Person {

    #age = 1;
    #name;

    constructor(name) {
        this.#name = name;
    }

    growUp() {
        this.#age++;
    }

    hello() {
        console.log(`My name is ${this.#name} and I am ${this.#age} years old`);
    }
}

class Summer {
    #numbers = [];

    add(number) {
        this.#numbers.push(number);
    }

    getCurrentSum() {
        return this.#numbers.reduce((x, y) => x + y, 0);
    }
}

class Race {
    #cars = [];

    addCars(...cars) {
        cars.forEach(car => this.#cars.push(car));
    }

    winner() {
        return this.#cars.reduce((c1, c2) => c2.speed > c1.speed ? c2 : c1);
    }
}

class Car {
    constructor(color, speed=0) {
        this.color = color;
        this.speed = speed;
    }

    drive(speed) {
        this.speed = speed;
    }

    isFasterThan(other) {
        return this.speed > other.speed;
    }
}

    

