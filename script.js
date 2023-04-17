// Set up the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width = canvas.width = 500;
var height = canvas.height = 500;

// Set up the target
var targetX = width / 2;
var targetY = height / 2;
var targetRadius = 50;

// Set up the player
var playerX = 50;
var playerY = height / 2;
var playerSize = 20;

// Move the player with the arrow keys
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp" && playerY > playerSize) {
    playerY -= 10;
  } else if (event.code === "ArrowDown" && playerY < height - playerSize) {
    playerY += 10;
  } else if (event.code === "ArrowLeft" && playerX > playerSize) {
    playerX -= 10;
  } else if (event.code === "ArrowRight" && playerX < targetX - targetRadius - playerSize) {
    playerX += 10;
  }
});

// Check for collision between the player and the target
function checkCollision() {
  var dx = targetX - playerX;
  var dy = targetY - playerY;
  var distance = Math.sqrt(dx*dx + dy*dy);
  if (distance < targetRadius + playerSize) {
    return true;
  } else {
    return false;
  }
}

// Draw the game
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, width, height);

  // Draw the target
  ctx.beginPath();
  ctx.arc(targetX, targetY, targetRadius, 0, Math.PI*2);
  ctx.fillStyle = "#69b3a2";
  ctx.fill();
  ctx.closePath();

  // Draw the player
  ctx.beginPath();
  ctx.arc(playerX, playerY, playerSize, 0, Math.PI*2);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.closePath();

  // Check for collision
  if (checkCollision()) {
    alert("Congratulations! You hit the target!");
  } else {
    window.requestAnimationFrame(draw);
  }
}

// Start the game
draw();
