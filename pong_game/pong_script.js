//выбираем canvas
const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

//создаем мяч
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: "WHITE"
}

//создаем панель игрока
const user = {
    x: 0,
    y: canvas.height / 2 - 100 / 2,
    width: 10,
    height: 100,
    color: "WHITE",
    score: 0
}
//создаем панель компьютера
const com = {
    x: canvas.width - 10,
    y: canvas.height / 2 - 100 / 2,
    width: 10,
    height: 100,
    color: "WHITE",
    score: 0
}

//создаем сеть
const net = {
    x: canvas.width / 2 - 2 / 2,
    y: 0,
    width: 2,
    height: 10,
    color: "WHITE",
}

//Рисуем rect функцию
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}
function drawArc(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.closePath;
    ctx.fill();
}
canvas.addEventListener("mousemove", getMousePos);
function getMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height / 2;
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speed = 5;
    ball.velocityX = -ball.velocityX;
}

//рисуем сеть
function drawNet() {
    for (let i = 0; i <= canvas.height; i += 15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}
//рисуем текст
function drawText(text, x, y) {
    ctx.fillStyle = "#fff";
    ctx.font = "45px fantasy";
    ctx.fillText(text, x, y);
}

function collision(b, p) {
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    return b.right > p.left && b.top < p.bottom && b.left < p.right && b.bottom > p.top;
}

function update() {
    if (ball.x - ball.radius < 0) {
        com.score++;
        resetBall();
    }
    else if (ball.x + ball.radius > canvas.width) {
        user.score++;
        resetBall();
    }

    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    let computerLevel = 0.1;
    com.y += (ball.y - (com.y + com.height / 2)) * computerLevel;

    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.velocityY = -ball.velocityY;
    }
    let player = (ball.x < canvas.width / 2) ? user : com;

    if (collision(ball, player)) {
        let collidePoint = ball.y - (player.y + player.height / 2);
        collidePoint = collidePoint / (player.height / 2);

        let angleRad = collidePoint * (Math.PI / 4);

        let direction = (ball.x < canvas.width / 2) ? 1 : -1;
        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY = ball.speed * Math.sin(angleRad);
        ball.speed += 0.1;
    }
    
}
function render() {
    drawRect(0, 0, canvas.width, canvas.height, "#000");
    drawText(user.score, canvas.width / 4, canvas.height / 5);
    drawText(com.score, 3 * canvas.width / 4, canvas.height / 5);
    drawNet();
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(com.x, com.y, com.width, com.height, com.color);
    drawArc(ball.x, ball.y, ball.radius, ball.color);
}
function game() {
    update();
    render();
}
const framePerSecond = 50;
setInterval(game, 1000 / framePerSecond);



//рисуем круг
// function drawCircle(x, y, r, color) {
//     ctx.fillStyle = color;
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, Math.PI * 2, false);
//     ctx.closePath();
//     ctx.fill();
// }

// drawText("Something", 300, 200, "WHITE");


// function movePaddle(evt) {
//     let rect = canvas.getBoundingClientRect();
//     user.y = evt.clientY - rect.top - user.height / 2;
// }





