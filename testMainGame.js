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

// Test the red brick
console.log(redBrickTest.showXVal == 20);
console.log(redBrickTest.showYVal == 20);
console.log(redBrickTest.showIsHit == false);
console.log(redBrickTest.showShowScore == 100);

// Test the blue brick
console.log(blueBrickTest.showXVal == 40);
console.log(blueBrickTest.showYVal == 40);
console.log(blueBrickTest.showIsHit == false);
console.log(blueBrickTest.showShowScore == 200);

// Test the green brick
console.log(greenBrickTest.showXVal == 60);
console.log(greenBrickTest.showYVal == 60);
console.log(greenBrickTest.showIsHit == false);
console.log(greenBrickTest.showShowScore == 300);

// Test the yellow brick
console.log(yellowBrickTest.showXVal == 80);
console.log(yellowBrickTest.showYVal == 80);
console.log(yellowBrickTest.showIsHit == false);
console.log(yellowBrickTest.showShowScore == 400);

// Test the purple brick
console.log(purpleBrickTest.showXVal == 100);
console.log(purpleBrickTest.showYVal == 100);
console.log(purpleBrickTest.showIsHit == false);
console.log(purpleBrickTest.showShowScore == 500);