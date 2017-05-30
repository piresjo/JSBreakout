"use strict"

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

	checkIfHit(checkBall) {

	}

	collison(collideBall) {
		if (!this.isHit) {
			this.isHit = true;
			collideBall.flip();
		}
		
	}

}

class BlueBrick extends Brick {
	constructor(xVal, yVal) {
		super(xVal, yVal);
		this.score = 100;
	}

	showScore() {
		return this.score;
	}
}

class RedBrick extends Brick {
	constructor(xVal, yVal) {
		super(xVal, yVal);
		this.score = 200;
	}

	showScore() {
		return this.score;
	}
}

class GreenBrick extends Brick {
	constructor(xVal, yVal) {
		super(xVal, yVal);
		this.score = 300;
	}

	showScore() {
		return this.score;
	}
}

class YellowBrick extends Brick {
	constructor(xVal, yVal) {
		super(xVal, yVal);
		this.score = 400;
	}

	showScore() {
		return this.score;
	}
}

class PurpleBrick extends Brick {
	constructor(xVal, yVal) {
		super(xVal, yVal);
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
		this.velocity = 4;
		this.isDead = false;
		this.angle = -(Math.PI / 2);
	}

	move() {
		var xValAdd = this.velocity * Math.cos(this.angle);
		var yValAdd = this.velocity * Math.sin(this.angle);
		xValAdd = Math.round(xValAdd);
		yValAdd = Math.round(yValAdd);
		this.xVal = this.xVal + xValAdd;
		this.yVal = this.yVal + yValAdd;
	}

	showXVal() {
		return this.xVal;
	}

	showYVal() {
		return this.yVal;
	}

	showVelocity() {
		return this.velocity;
	}


	showIsDead() {
		return this.isDead;
	}

	showAngle() {
		return this.angle;
	}

	flip() {

	}

	increaseSpeed() {
		this.velocity = this.velocity + 2;
	}
}

class Paddle {
	constructor(xVal, yVal) {
		this.xVal = xVal;
		this.yVal = yVal;
	}

	move(newX) {
		this.xVal = newX;
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
		this.fps = 30;
		this.canvas = null;
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

	init(div) {
		var self = this;
		this.containerDiv = div;
		self.width = window.innerWidth;
		self.height = window.innerHeight;
		window.addEventListener('resize', function resize(event) {
			self.width = window.innerWidth;
			self.height = window.innerHeight;
			self.canvas.width = self.width;
			self.canvas.height = self.height;
			self.draw();
		});

		//	Create the canvas.
		var canvas = document.createElement('canvas');
		div.appendChild(canvas);
		this.canvas = canvas;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}

	begin() {
		//	Create the bricks, set the ball and paddle

		var self = this;
		//	Start the timer.
		this.interval = setInterval(function() {
			self.update();
			self.draw();	
		}, 1000 / this.fps);
	}

	end() {
		clearInterval(this.interval);
	}

	update() {
		var dt = 1 / this.fps;
		// Update the states of the blocks, the ball, and the object
	}

	draw() {
		//	Get the drawing context.
		var context = this.canvas.getContext("2d");

		//	Draw the background.
	 	context.fillStyle = '#e3e3e3';
		context.fillRect(0, 0, this.width, this.height);

		//	Draw  the elements.
		context.fillStyle = '#ffffff';
		for(var i = 0; i < this.stars.length; i++) {
			var star = this.stars[i];
			context.fillRect(star.x, star.y, star.size, star.size);
		}
	}


}

module.exports = {
  brickClasses: {
  	mainBrick: Brick,
    redBrick: RedBrick,
    blueBrick: BlueBrick,
    greenBrick: GreenBrick,
    yellowBrick: YellowBrick,
    purpleBrick: PurpleBrick
  },
  ballClasses: {
    ball: Ball
  },
  paddleClasses: {
    paddle: Paddle
  },
  gameClasses: {
  	gameClass: Game
  }
};