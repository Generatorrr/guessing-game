class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	this.down = min;
    	this.up = max;
    }

    guess() {
    	return Math.round((this.down + this.up) / 2);

    }

    lower() {
    	return this.setRange(this.down, this.guess());
    }

    greater() {
    	return this.setRange(this.guess(), this.up);
    }
}

module.exports = GuessingGame;
