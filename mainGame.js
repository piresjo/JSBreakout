"use strict";

class Brick {
	constructor(xVal, yVal) {
		this.xVal = xVal;
		this.yVal = yVal;
		this.isHit = false;
		this.width = 50;
		this.length = 100;
	}

	showXVal() {
		return this.xVal;
	}

	showYVal() {
		return this.yVal;
	}

	showLength() {
		return this.length;
	}

	showWidth() {
		return this.width;
	}

	showIsHit() {
		return this.isHit;
	}

	hasCollided(collideBall) {
		return collideBall.showXVal() >= this.showXVal() && collideBall.showXVal() < this.showXVal() + this.showLength() && collideBall.showYVal() >= this.showYVal() && collideBall.showYVal() < this.showYVal() + this.showWidth() && !this.showIsHit();
	}

	collision(collideBall) {
		if (!this.showIsHit()) {
			this.isHit = true;
			collideBall.flip('v');
		}
	}

}

class BlueBrick extends Brick {
	constructor(xVal, yVal) {
		super(xVal, yVal);
		this.score = 100;
		//this.image = new Image();
		//this.image.src = 'sprites/blueBrick.jpg';
	}

	showScore() {
		return this.score;
	}
}

class RedBrick extends Brick {
	constructor(xVal, yVal) {
		super(xVal, yVal);
		this.score = 200;
		//this.image = new Image();
		//this.image.src = 'sprites/redBrick.jpg';
	}

	showScore() {
		return this.score;
	}
}

class GreenBrick extends Brick {
	constructor(xVal, yVal) {
		super(xVal, yVal);
		this.score = 300;
		//this.image = new Image();
		//this.image.src = 'sprites/greenBrick.jpg';
	}

	showScore() {
		return this.score;
	}
}

class YellowBrick extends Brick {
	constructor(xVal, yVal) {
		super(xVal, yVal);
		this.score = 400;
		//this.image = new Image();
		//this.image.src = 'sprites/yellowBrick.jpg';
	}

	showScore() {
		return this.score;
	}
}

class PurpleBrick extends Brick {
	constructor(xVal, yVal) {
		super(xVal, yVal);
		this.score = 500;
		//this.image = new Image();
		//this.image.src = 'sprites/purpleBrick.jpg';
	}

	showScore() {
		return this.score;
	}
}

class Ball {
	constructor(xVal, yVal) {
		this.xVal = xVal;
		this.yVal = yVal;
		this.xVelocity = 2;
		this.yVelocity = 2;
		this.isDead = false;
		this.length = 40;
		this.width = 40;
		//this.image = new Image();
		//this.image.src = 'sprites/ball.jpg';
	}

	move() {
		this.xVal = this.xVal + this.xVelocity;
		this.yVal = this.yVal + this.yVelocity;
	}

	showXVal() {
		return this.xVal;
	}

	showYVal() {
		return this.yVal;
	}

	showLength() {
		return this.length;
	}

	showWidth() {
		return this.width;
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

	flip(flipChar) {
		if (flipChar === 'v') {
			this.yVelocity = -this.yVelocity;
		} else if (flipChar === 'h') {
			this.xVelocity = -this.xVelocity;
		} else {
			throw error("BAD FLIP CHAR STRING");
		}
	}

	increaseSpeed() {
		this.xVelocity = this.xVelocity + 2;
		this.yVelocity = this.yVelocity + 2;
	}

	atTopWall(canvasY) {
		return this.showYVal() > canvasY;
	}

	atSideWalls(canvasX) {
		return this.showXVal() > canvasX || this.showXVal() < this.showWidth();
	}

	isBallDead() {
		return this.showYVal() < 0;
	}

	place(newX, newY) {
		this.xVal = newX;
		this.yVal = newY;
	}
}

class Paddle {
	constructor(xVal, yVal) {
		this.xVal = xVal;
		this.yVal = yVal;
		this.width = 50;
		this.length = 150;
		//this.image = new Image();
		//this.image.src = 'sprites/paddle.jpg';
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

	showLength() {
		return this.length;
	}

	showWidth() {
		return this.width;
	}

	hasCollided(collideBall) {
		return collideBall.showXVal() >= this.showXVal() && collideBall.showXVal() < this.showXVal() + this.showLength() && collideBall.showYVal() >= this.showYVal() && collideBall.showYVal() < this.showYVal() + this.showWidth();
	}

	collision(collideBall) {
		if (!this.isHit) {
			this.isHit = true;
			collideBall.flip('v');
		}
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
		this.redBrickList = [];
		this.blueBrickList = [];
		this.greenBrickList = [];
		this.yellowBrickList = [];
		this.purpleBrickList = [];
		this.ball = null;
		this.paddle = null;
		this.numElements = 40;
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
		self.width = this.xDem;
		self.height = this.yDem;

		//	Create the canvas.
		var canvas = document.createElement('canvas');
		div.appendChild(canvas);
		this.canvas = canvas;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}

	gameOver() {
		alert("GAME OVER");
	}

	newLife() {
		this.numLives += 1;
	}

	restart() {
		this.ball.place(this.xDem / 2, 200);
		this.paddle.move(this.xDem / 2);
		if (this.numLives > 0) {
			this.numLives -= 1;
		} else {
			this.gameOver();
		}
	}

	newLevel() {
		this.ball.place(this.xDem / 2, 200);
		this.paddle.move(this.xDem / 2);
		var interval = 50;
		this.redBrickList = [];
		this.blueBrickList = [];
		this.greenBrickList = [];
		this.yellowBrickList = [];
		this.purpleBrickList = [];
		for (var i = 0; i < 8; i++) {
			var rb = new RedBrick(50 + interval * i, 400);
			var bb = new BlueBrick(50 + interval * i, 450);
			var gb = new GreenBrick(50 + interval * i, 500);
			var yb = new YellowBrick(50 + interval * i, 550);
			var pb = new PurpleBrick(50 + interval * i, 600);
			this.redBrickList.push(rb);
			this.blueBrickList.push(bb);
			this.greenBrickList.push(gb);
			this.yellowBrickList.push(yb);
			this.purpleBrickList.push(pb);
		}
		var self = this;
		self.draw();
		this.numElements = 40;
	}

	drawLives() {
		var context = this.canvas.getContext("2d");
		context.font = "16px Arial";
		context.fillText('Lives: ' + this.numLives, 100, 20);
	}

	drawScore() {
		var context = this.canvas.getContext("2d");
		context.font = "16px Arial";
		context.fillText('Score: ' + this.score, 8, 20);
	}

	begin() {
		//	Create the bricks, set the ball and paddle
		this.ball = new Ball(this.xDem / 2, 200);
		this.paddle = new Paddle(this.xDem / 2, 100);
		var interval = 50;
		for (var i = 0; i < 8; i++) {
			var rb = new RedBrick(50 + interval * i, 400);
			var bb = new BlueBrick(50 + interval * i, 450);
			var gb = new GreenBrick(50 + interval * i, 500);
			var yb = new YellowBrick(50 + interval * i, 550);
			var pb = new PurpleBrick(50 + interval * i, 600);
			this.redBrickList.push(rb);
			this.blueBrickList.push(bb);
			this.greenBrickList.push(gb);
			this.yellowBrickList.push(yb);
			this.purpleBrickList.push(pb);
		}
		var self = this;
		self.draw();
		//	Start the timer.
		this.interval = setInterval(function () {
			self.update();
			self.draw();
		}, 1000 / this.fps);
	}

	update() {
		var dt = 1 / this.fps;
		// Update the states of the blocks, the ball, and the paddle
		if (this.numElements === 0) {
			this.newLevel();
		}
		if (this.ball.isBallDead()) {
			this.restart();
		}
		if (this.score === 20000) {
			this.newLife();
		}
		$('#gameContainer').mouseover(function (e) {
			var xMouseVal = e.pageX;
			this.paddle.move(xMouseVal);
		});

		this.ball.move();
		if (this.ball.atTopWall(this.yDem)) {
			this.ball.flip('v');
		}
		if (this.ball.atSideWalls(this.xDem)) {
			this.ball.flip('h');
		}
		if (this.paddle.hasCollided(this.ball)) {
			this.paddle.collision(this.ball);
		}
		for (var i = 0; i < 8; i++) {
			if (!this.redBrickList[i].showIsHit && this.redBrickList[i].hasCollided(this.ball)) {
				this.redBrickList[i].collison(this.ball);
				this.numElements -= 1;
				this.score += this.redBrickList[i].showScore();
			}
			if (!this.blueBrickList[i].showIsHit && this.blueBrickList[i].hasCollided(this.ball)) {
				this.blueBrickList[i].collison(this.ball);
				this.numElements -= 1;
				this.score += this.blueBrickList[i].showScore();
			}
			if (!this.greenBrickList[i].showIsHit && this.greenBrickList[i].hasCollided(this.ball)) {
				this.greenBrickList[i].collison(this.ball);
				this.numElements -= 1;
				this.score += this.greenBrickList[i].showScore();
			}
			if (!this.yellowBrickList[i].showIsHit && this.yellowBrickList[i].hasCollided(this.ball)) {
				this.yellowBrickList[i].collison(this.ball);
				this.numElements -= 1;
				this.score += this.yellowBrickList[i].showScore();
			}
			if (!this.purpleBrickList[i].showIsHit && this.purpleBrickList[i].hasCollided(this.ball)) {
				this.purpleBrickList[i].collison(this.ball);
				this.numElements -= 1;
				this.score += this.purpleBrickList[i].showScore();
			}
		}
	}

	draw() {
		//	Get the drawing context.
		var context = this.canvas.getContext("2d");

		// Clear Stuff and Draw the Background.
		context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		context.fillStyle = '#e3e3e3';
		context.fillRect(0, 0, this.width, this.height);

		//	Draw  the elements.
		// Start with the bricks
		for (var i = 0; i < 8; i++) {
			if (!this.redBrickList[i].showIsHit()) {
				context.drawImage(this.redBrickList[i].image, this.redBrickList[i].showXVal(), this.redBrickList[i].showYVal());
			}
			if (!this.blueBrickList[i].showIsHit()) {
				context.drawImage(this.blueBrickList[i].image, this.blueBrickList[i].showXVal(), this.blueBrickList[i].showYVal());
			}
			if (!this.greenBrickList[i].showIsHit()) {
				context.drawImage(this.greenBrickList[i].image, this.greenBrickList[i].showXVal(), this.greenBrickList[i].showYVal());
			}
			if (!this.yellowBrickList[i].showIsHit()) {
				context.drawImage(this.yellowBrickList[i].image, this.yellowBrickList[i].showXVal(), this.yellowBrickList[i].showYVal());
			}
			if (!this.purpleBrickList[i].showIsHit()) {
				context.drawImage(this.purpleBrickList[i].image, this.purpleBrickList[i].showXVal(), this.purpleBrickList[i].showYVal());
			}
		}

		// now the ball
		context.drawImage(this.ball.image, this.ball.showXVal(), this.ball.showYVal());
		// now the paddle
		context.drawImage(this.paddle.image, this.paddle.showXVal(), this.paddle.showYVal());
	}
}

/* Export module:  
 * I'll be using this for my test cases  
 */
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