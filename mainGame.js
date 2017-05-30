"use strict"

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

	showIsHit() {
		return this.isHit;
	}

	hasCollided(collideBall) {
		return (this.xVal + this.width >= collideBall.getX()
				&& this.yVal + this.height >= collideBall.getY()
				&& collideBall.getX() + collideBall.getWidth() >= this.xVal 
				&& collideBall.getY() + collideBall.getHeight() >= this.yVal
				&& (!(this.isHit)));
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
		this.length = 40;
		this.width = 40;
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
		this.width = 50;
		this.length = 150;
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

	hasCollided(collideBall) {
		return (this.xVal + this.width >= collideBall.getX()
				&& this.yVal + this.height >= collideBall.getY()
				&& collideBall.getX() + collideBall.getWidth() >= this.xVal 
				&& collideBall.getY() + collideBall.getHeight() >= this.yVal
				&& (!(this.isHit)));
	}

	collison(collideBall) {
		if (!this.isHit) {
			this.isHit = true;
			collideBall.flip();
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

	begin() {
		//	Create the bricks, set the ball and paddle
		var redBrickList = [];
		var blueBrickList = [];
		var greenBrickList = [];
		var yellowBrickList = [];
		var purpleBrickList = [];
		var ball = new Ball(this.xDem/2, 200);
		var paddle = new Paddle(this.xDem/2, 100);
		var interval = 50;
		for (int i = 0; i < 8; i++) {
			var rb = new RedBrick(50 + (interval*i), 400);
			var bb = new BlueBrick(50 + (interval*i), 450);
			var gb = new GreenBrick(50 + (interval*i), 500);
			var yb = new YellowBrick(50 + (interval*i), 550);
			var pb = new PurpleBrick(50 + (interval*i), 600);
			redBrickList.push(rb);
			blueBrickList.push(bb);
			greenBrickList.push(gb);
			yellowBrickList.push(yb);
			purpleBrickList.push(pb);
		}
		var self = this;
		//	Start the timer.
		this.interval = setInterval(function() {
			self.update();
			self.draw();	
		}, 1000 / this.fps);
	}

	update() {
		var dt = 1 / this.fps;
		// Update the states of the blocks, the ball, and the object
		$('#gameContainer').mouseover(function(e) {
			var xMouseVal = e.pageX;
			paddle.move(xMouseVal);
		});
		ball.move();
	}

	draw() {
		//	Get the drawing context.
		var context = this.canvas.getContext("2d");

		//	Draw the background.
	 	context.fillStyle = '#e3e3e3';
		context.fillRect(0, 0, this.width, this.height);

		//	Draw  the elements.
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