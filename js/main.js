// GLOBAL DEFINITIONS

	const backgroundColour = "#cfedfc";
	const animSpeed = 50;
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

function drawImageBox(imageLink) {
    let image = draw.image(imageLink)
    .move(1100, 220);
	return image;
}

async function moveAlongPath(path, ticks, x, y, theta) {
	for (let i = 0; i < ticks; i++) {
		path.dmove(x, y).rotate(theta);
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
    imageBox = drawImageBox('image/1.png');
	text = draw.text('On a snowy Valentine\'s Day, \nJasper Bunny still could not think \nof a gift good enough for Lilly.\nJasper loved his wife very much. \nSo he couldn\'t give her just any old gift.').fill('white').font({size:24}).center(750, 550).opacity(1);
	heartPath = drawHeartPath();
    heartPath.scale(2).move(0, -100);
    await sleep(8000);
    text.remove();
    text = draw.text('"Perhaps seeing what my \nneighbors are doing for Valentine\'s Day \nwill give me and idea for the perfect \npresent." he thought.').fill('white').font({size:24}).center(750, 550).opacity(1);
    await sleep(5000);
    text.remove();
    textbox.remove();
    imageBox.remove();
    await moveAlongPath(heartPath, 90, -1, 1, 1);
    textbox = drawTextBox();
    text = draw.text('"He stopped at the Porcupines\' house. \n"We are each knitting a scarf for \nMother." said the seven porcupine children.').fill('white').font({size:24}).center(750, 550).opacity(1);
    imageBox = drawImageBox('image/2.png');
    await sleep(5000);
    text.remove();
    imageBox.remove();
    imageBox = drawImageBox('image/3.png');
    text = draw.text('"A handmade scarf did seem \nlike a good gift for Lilly,\n but Jasper couldn\'t get \nthe hang of knitting.').fill('white').font({size:24}).center(750, 550).opacity(1);
    await sleep(5000);
    imageBox.remove();
    text.remove();
    textbox.remove();
    await sleep(1000);
    textbox = drawTextBox();
    text = draw.text('On his way, Jasper \nsaw a glow coming from the Frogs\' window.\n"I bet Miriam will have\na good suggestion." thought Jasper.').fill('white').font({size:24}).center(750, 550).opacity(1);
    await sleep(5000);
    text.remove();
    textbox.remove();
    await moveAlongPath(heartPath, 60, 1, -3, 1.5);
    textbox = drawTextBox();
    text = draw.text('Inside, Miriam showed Jasper \na box fill of chocolate-covered \nflies. "Landon will be so\nexcited when he wakes up!" she whispered.\n"I\'m sure he will." Jasper agreed pleasantly."').fill('white').font({size:24}).center(750, 550).opacity(1);
    text.remove();
    await sleep(2000);
    text = draw.text('He thought, "This is a treat for a frog-but it\'s definitely not something my Lilly would enjoy!"').fill('white').font({size:24}).center(750, 550).opacity(1);
    text.remove();
    textbox.remove();
	await moveAlongPath(heartPath, 90, -1, 1, 1);
	await sleep(2000);
	await moveAlongPath(heartPath, 30, -1, -2, 3);
	await sleep(2000);
	heartPath.scale(0.5).move(50, -180);
	await sleep(2000);
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

