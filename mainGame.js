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
		console.log(this.xVal + this.width >= collideBall.showXVal());
		console.log(this.yVal + this.height >= collideBall.showYVal());
		console.log(collideBall.showXVal() + collideBall.width >= this.xVal);
		console.log(collideBall.showYVal() + collideBall.height >= this.yVal);
		console.log(!(this.isHit));
		return (this.xVal + this.width >= collideBall.showXVal()
				&& this.yVal + this.height >= collideBall.showYVal()
				&& collideBall.showXVal() + collideBall.width >= this.xVal 
				&& collideBall.showYVal() + collideBall.height >= this.yVal
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
		this.velocity = 4;
		this.isDead = false;
		this.angle = -(Math.PI / 4);
		this.length = 40;
		this.width = 40;
		//this.image = new Image();
		//this.image.src = 'sprites/ball.jpg';
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
		if (this.angle < 0) {
			this.angle = this.angle + (Math.Pi / 2);
		} else {
			this.angle = this.angle - (Math.PI / 2);
		}
		
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

	hasCollided(collideBall) {
		console.log(this.xVal + this.width >= collideBall.showXVal());
		console.log(this.yVal + this.height >= collideBall.showYVal());
		console.log(collideBall.showXVal() + collideBall.width >= this.xVal);
		console.log(collideBall.showYVal() + collideBall.height >= this.yVal);
		return (this.xVal + this.width >= collideBall.showXVal()
				&& this.yVal + this.height >= collideBall.showYVal()
				&& collideBall.showXVal() + collideBall.width >= this.xVal 
				&& collideBall.showYVal() + collideBall.height >= this.yVal);
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
		this.redBrickList = [];
		this.blueBrickList = [];
		this.greenBrickList = [];
		this.yellowBrickList = [];
		this.purpleBrickList = [];
		this.ball = null;
		this.paddle = null;
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
		console.log("HELLO");
		this.canvas = canvas;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}

	begin() {
		//	Create the bricks, set the ball and paddle
		this.ball = new Ball(this.xDem/2, 200);
		this.paddle = new Paddle(this.xDem/2, 100);
		var interval = 50;
		for (var i = 0; i < 8; i++) {
			var rb = new RedBrick(50 + (interval*i), 400);
			var bb = new BlueBrick(50 + (interval*i), 450);
			var gb = new GreenBrick(50 + (interval*i), 500);
			var yb = new YellowBrick(50 + (interval*i), 550);
			var pb = new PurpleBrick(50 + (interval*i), 600);
			this.redBrickList.push(rb);
			this.blueBrickList.push(bb);
			this.greenBrickList.push(gb);
			this.yellowBrickList.push(yb);
			this.purpleBrickList.push(pb);
		}
		var self = this;
		self.draw();
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
			this.paddle.move(xMouseVal);
		});
		this.ball.move();
	}

	draw() {
		//	Get the drawing context.
		var context = this.canvas.getContext("2d");

		//	Draw the background.
	 	context.fillStyle = '#e3e3e3';
		context.fillRect(0, 0, this.width, this.height);

		//	Draw  the elements.
		// Start with the bricks
		for (var i = 0; i < 8; i++) {
			if (!(this.redBrickList[i].showIsHit())) {
				context.drawImage(this.redBrickList[i].image, this.redBrickList[i].showXVal(),
					this.redBrickList[i].showYVal());
			}
			if (!(this.blueBrickList[i].showIsHit())) {
				context.drawImage(this.blueBrickList[i].image, this.blueBrickList[i].showXVal(),
					this.blueBrickList[i].showYVal());
			}
			if (!(this.greenBrickList[i].showIsHit())) {
				context.drawImage(this.greenBrickList[i].image, this.greenBrickList[i].showXVal(),
					this.greenBrickList[i].showYVal());
			}
			if (!(this.yellowBrickList[i].showIsHit())) {
				context.drawImage(this.yellowBrickList[i].image, this.yellowBrickList[i].showXVal(),
					this.yellowBrickList[i].showYVal());
			}
			if (!(this.purpleBrickList[i].showIsHit())) {
				context.drawImage(this.purpleBrickList[i].image, this.purpleBrickList[i].showXVal(),
					this.purpleBrickList[i].showYVal());
			}
		}

		// now the ball
		context.drawImage(this.ball.image, this.ball.showXVal(), this.ball.showYVal());
		// now the paddle
		context.drawImage(this.paddle.image, this.paddle.showXVal(), this.paddle.showYVal());
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