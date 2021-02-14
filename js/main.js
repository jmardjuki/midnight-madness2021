// GLOBAL DEFINITIONS

	const backgroundColour = "#cfedfc"
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

function drawCircle() {
	let circ = draw.circle(100).fill('#f06').move(50, 50);
	return circ;
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

function turnPage() {
	var page = 0;
	sleep(1000);
	page += 1;
}


async function main() {

	window.addEventListener("resize", resizeDrawbox);
	heartPath = drawHeartPath();
	heartPath.scale(3).move(0, -150);
	for (let i = 0; i <= 80; i++) {
		await sleep(50);
		heartPath.dmove(0, 5);
	}
	for (let i = 0; i <= 60; i++) {
		await sleep(50);
		heartPath.dmove(5, 0);
	}
	for (let i = 0; i <= 80; i++) {
		await sleep(50);
		heartPath.dmove(0, -5);
	}
	for (let i = 0; i <= 30; i++) {
		await sleep(50);
		heartPath.dmove(-5, 0);
	}
	await sleep(2000);
	heartPath.scale(0.3).move(200, 500);

	coverHeartPath();
	window.addEventListener("click", turnPage);
	//let circ = drawCircle(draw);
	//let rec = draw.rect(width / 3, height / 3).fill('#11aabb').move(width / 3, height / 3);
	//let gr = draw.group().add(circ).add(rec);
	//await sleep(2000);
	//gr.rotate(45).scale(.5);

}

main();

