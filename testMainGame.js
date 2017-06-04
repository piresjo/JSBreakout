"use strict"

var commands = require('./mainGame');

var mainBrick = commands.brickClasses.mainBrick;
var redBrickClass = commands.brickClasses.redBrick;
var blueBrickClass = commands.brickClasses.blueBrick;
var greenBrickClass = commands.brickClasses.greenBrick;
var yellowBrickClass = commands.brickClasses.yellowBrick;
var purpleBrickClass = commands.brickClasses.purpleBrick;

var ballClass = commands.ballClasses.ball;

var paddleClass = commands.paddleClasses.paddle;

var gameClass = commands.gameClasses.gameClass; 

// Test all of the bricks, without any interactions

let redBrickTest = new redBrickClass(20, 20);
let blueBrickTest = new blueBrickClass(40, 40);
let greenBrickTest = new greenBrickClass(60, 60);
let yellowBrickTest = new yellowBrickClass(80, 80);
let purpleBrickTest = new purpleBrickClass(100, 100);

// Test the blue brick
console.log("Blue Bricks");
console.log(blueBrickTest.showXVal() == 40);
console.log(blueBrickTest.showYVal() == 40);
console.log(blueBrickTest.showIsHit() == false);
console.log(blueBrickTest.showScore() == 100);
console.log("");

// Test the red brick
console.log("Red Bricks");
console.log(redBrickTest.showXVal() == 20);
console.log(redBrickTest.showYVal() == 20);
console.log(redBrickTest.showIsHit() == false);
console.log(redBrickTest.showScore() == 200);
console.log("");

// Test the green brick
console.log("Green Bricks");
console.log(greenBrickTest.showXVal() == 60);
console.log(greenBrickTest.showYVal() == 60);
console.log(greenBrickTest.showIsHit() == false);
console.log(greenBrickTest.showScore() == 300);
console.log("");

// Test the yellow brick
console.log("Yellow Bricks");
console.log(yellowBrickTest.showXVal() == 80);
console.log(yellowBrickTest.showYVal() == 80);
console.log(yellowBrickTest.showIsHit() == false);
console.log(yellowBrickTest.showScore() == 400);
console.log("");

// Test the purple brick
console.log("Purple Bricks");
console.log(purpleBrickTest.showXVal() == 100);
console.log(purpleBrickTest.showYVal() == 100);
console.log(purpleBrickTest.showIsHit() == false);
console.log(purpleBrickTest.showScore() == 500);
console.log("");

// Test the other stuff, again without interactions
let paddleTest = new paddleClass(120, 120);
let ballTest = new ballClass(140, 140);
let gameTest = new gameClass(5, 640, 480);

// Test the paddle
console.log("Paddle Movements");
console.log(paddleTest.showXVal() == 120);
console.log(paddleTest.showYVal() == 120);
paddleTest.move(110);
console.log(paddleTest.showXVal() == 110);
console.log(paddleTest.showYVal() == 120);
console.log("");

// Test the ball
console.log("Ball Movements");
console.log(ballTest.showXVal() == 140);
console.log(ballTest.showYVal() == 140);
console.log(ballTest.showAngle() == -(Math.PI / 4));
console.log(ballTest.showVelocity() == 4);
console.log(ballTest.showIsDead() == false);
console.log("");

// Test collision between the ball and brick
console.log("Ball-Brick Collisions");
let rbTestCollide = new redBrickClass(100, 100);
let ballTestCollide = new ballClass(100, 100);
console.log(rbTestCollide.hasCollided(ballTestCollide));
console.log("");

// Test collision between the ball and paddle
console.log("Ball-Paddle Collisions");
let paddleTestCollide = new paddleClass(100, 100);
let ballTestCollide2 = new ballClass(100, 100);
console.log(paddleTestCollide.hasCollided(ballTestCollide2));
console.log("");