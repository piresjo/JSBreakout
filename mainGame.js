class Brick {
	constructor(xVal, yVal) {
		this.xVal = xVal;
		this.yVal = yVal;
		this.isHit = false;
	}

}

class BlueBrick extends Brick {
	this.score = 100;

}

class RedBrick extends Brick {
	this.score = 200;

}

class GreenBrick extends Brick {
	this.score = 300;
}

class YellowBrick extends Brick {
	this.score = 400;
}

class PurpleBrick extends Brick {
	this.score = 500;
}

class Ball {
	constructor(xVal, yVal) {
		this.xVal = xVal;
		this.yVal = yVal;
		this.xVelocity;
		this.yVelocity;
		this.isDead = false;
	}

	move() {

	}
}

class Paddle {
	constructor(xVal, yVal) {
		this.xVal = xVal;
		this.yVal = yVal;
	}

	move() {

	}

}

class Game {
	constructor(numLives, xDem, yDem) {
		this.numLives = numLives;
		this.xDem = xDem;
		this.yDem = yDem;
		this.score = 0;
		this.extendLife = 10000;
	}

}