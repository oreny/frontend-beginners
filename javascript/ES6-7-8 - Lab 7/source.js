"use strict";

class AutoBind {
    constructor() {
        const proto = Object.getPrototypeOf(this);
        const propertyNames = Object.getOwnPropertyNames(proto);
        propertyNames.map(name => proto[name]).filter(property => typeof property === "function")
            .forEach(p => p.bind(this));
    }
}

class LightBulb extends AutoBind {
    #div;
    #backgroundColor;
    static #bulbNo = 1;

    constructor(div) {
        super();
        this.#backgroundColor = div.style.backgroundColor;
        this.#div = this.buildInternalDiv(this.#backgroundColor);
        div.appendChild(this.#div);
        LightBulb.#bulbNo++;
    }

    buildInternalDiv(backgroundGolor) {
        const div = document.createElement("div");
        div.style.overflow = "hidden";
        div.style.backgroundColor = backgroundGolor;
        const button = document.createElement("button");
        button.innerHTML = `Activate Bulb ${LightBulb.#bulbNo}`;
        button.addEventListener("click", this.clickBulb)
        div.appendChild(button);
        return div;
    }

    clickBulb = () => {
        const bgColor = this.#div.style.backgroundColor;
        this.#div.style.backgroundColor = bgColor === this.#backgroundColor ? "yellow" : this.#backgroundColor;
    }
}



const bulbDiv = document.querySelector("#bulb");
for (let i = 0; i < 10; i++) {
    new LightBulb(bulbDiv);
}




