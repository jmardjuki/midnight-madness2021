// GLOBAL DEFINITIONS

	const backgroundColour = "#cfedfc";
	const animSpeed = 30;
	var width = window.innerWidth;
	var height = window.innerHeight - 10;
	var draw = SVG().addTo('body').size(width, height);

// UTILITY FUNCTIONS
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// DRAWING FUNCTIONS

function resizeDrawbox() {
	draw.viewbox(0, 0, window.innerWidth, window.innerHeight - 10);
}

function drawTextBox() {
	let circ = draw.rect(500, 300).radius(15).fill('#1a232f').move(500, 400);
	return circ;
}

async function moveAlongPath(path, ticks, x, y, theta) {
	for (let i = 0; i < ticks; i++) {
		path.move(x, y).rotate(theta);
		await sleep(animSpeed);
	}
}

async function moveAlongPathTransform(path, ticks, x, y, theta, scale=1) {
	for (let i = 0; i < ticks; i++) {
		path.translate(x, y).rotate(theta).scale(scale);
		await sleep(animSpeed);
	}
}

function drawHeartPath() {
	//const template = draw.path('M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z')
	// .stroke('pink')
	//  .fill('none')
	//  .hide()

	const arcPath = draw.path('M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z')
	  .stroke({color: '#9dc0c4', width: 20, dasharray: 10,})
	  .fill('none')

	return arcPath;
}

function coverHeartPath() {

}

// STORY FUNCTIONS

async function turnPage() {
	var page = 0;
	await sleep(1000);
	page += 1;
}


async function main() {

	window.addEventListener("resize", resizeDrawbox);
	textbox = drawTextBox();
	text = draw.text('Random Text in my Box').fill('white').font({size:24}).center(750, 550).opacity(1);
	heartPath = drawHeartPath();
	heartPath.scale(4).move(0, -100);
	let v = (1000/animSpeed) * 5;
	await moveAlongPath(heartPath, v, 210/v, 190/v, 45/v);
	await sleep(2000);
	await moveAlongPath(heartPath, v, 0, 240/v, 45/v);
	await sleep(2000);
	await moveAlongPath(heartPath, v, 190/v, 40/v, 45/v);
	await sleep(2000);
	await moveAlongPath(heartPath, v, 190/v, -40/v, 45/v);
	await sleep(2000);
	await moveAlongPath(heartPath, v, 0, -240/v, 45/v);
	await sleep(2000);
	await moveAlongPath(heartPath, v, -210/v, -190/v, 45/v);
	await sleep(2000);
	v = (1000/animSpeed);
	await moveAlongPathTransform(heartPath, v, 450/v, 200/v, 90/v, 0.97);
	//heartPath.scale(0.5).move(50, -180);
	textbox.remove();
	text.remove();
	//heartPath.remove();

	coverHeartPath();
	window.addEventListener("click", turnPage);
	//let circ = drawCircle(draw);
	//let rec = draw.rect(width / 3, height / 3).fill('#11aabb').move(width / 3, height / 3);
	//let gr = draw.group().add(circ).add(rec);
	//await sleep(2000);
	//gr.rotate(45).scale(.5);

}

main();

