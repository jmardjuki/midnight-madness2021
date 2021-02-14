let width = window.innerWidth;
let height = window.innerHeight - 10;

let draw = SVG().addTo('body').size(width, height);

window.addEventListener("resize", resizeDrawbox);


drawCircle(draw);
let rec = draw.rect(width / 3, height / 3).fill('#11aabb').move(width / 3, height / 3);

// cardioid heart

function resizeDrawbox() {
	draw.viewbox(0, 0, window.innerWidth, window.innerHeight - 10);
}

function drawBackground(draw) {
	draw.rect(width, height).fill('#cfedfc');
}

function drawCircle(draw) {
	draw.circle(100).fill('#f06').move(50, 50);
}