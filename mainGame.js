class Brick {
	constructor(xVal, yVal) {
		this.xVal = xVal;
		this.yVal = yVal;
		this.isHit = false;
	}

	showXVal() {
		return this.xVal;
	}

	showYVal() {
		return this.yVal;
	}

	showIsHit() {
		return this.isHit;
	}

}

class BlueBrick extends Brick {
	constructor(xVal, yVal) {
		this.score = 100;
	}

	showScore() {
		return this.score;
	}
}

class RedBrick extends Brick {
	constructor(xVal, yVal) {
		this.score = 200;
	}

	showScore() {
		return this.score;
	}
}

class GreenBrick extends Brick {
	constructor(xVal, yVal) {
		this.score = 300;
	}

	showScore() {
		return this.score;
	}
}

class YellowBrick extends Brick {
	constructor(xVal, yVal) {
		this.score = 400;
	}

	showScore() {
		return this.score;
	}
}

class PurpleBrick extends Brick {
	constructor(xVal, yVal) {
		this.score = 500;
	}

	showScore() {
		return this.score;
	}
}

class Ball {
	constructor(xVal, yVal) {
		this.xVal = xVal;
		this.yVal = yVal;
		this.xVelocity = 4;
		this.yVelocity = 4;
		this.isDead = false;
		this.angle = 180;
	}

	move() {

	}

	showXVal() {
		return this.xVal;
	}

	showYVal() {
		return this.yVal;
	}

	showXVelocity() {
		return this.xVelocity;
	}

	showYVelocity() {
		return this.yVelocity;
	}

	showIsDead() {
		return this.isDead;
	}

	showAngle() {
		return this.angle;
	}
}

class Paddle {
	constructor(xVal, yVal) {
		this.xVal = xVal;
		this.yVal = yVal;
	}

	move() {

	}

	showXVal() {
		return this.xVal;
	}

	showYVal() {
		return this.yVal;
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

	showNumLines() {
		return this.numLives;
	}

	showXDem() {
		return this.xDem;
	}

	showYDem() {
		return this.yDem;
	}

	showScore() {
		return this.score;
	}

	showExtendLife() {
		return this.extendLife;
	}

}

/*module.exports = {
  brickClasses: {
    
  },
  ballClasses: {
    
  },
  paddleClasses: {
    
  },
  gameClasses: {

  }
};*/