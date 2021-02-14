// GLOBAL DEFINITIONS

	const backgroundColour = "#cfedfc";
	const animSpeed = 30;
	var width = window.innerWidth;
	var height = window.innerHeight - 10;
	var draw = SVG().addTo('body').size(width, height);
	var waiting = false;

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

// STORY FUNCTIONS

async function waitForClick() {
	while(waiting) {
		await sleep(1000);
	}
	waiting = true;
}

async function turnPage() {
	waiting = false;
}

async function main() {

	window.addEventListener("resize", resizeDrawbox);
	window.addEventListener("click", turnPage);

    textbox = drawTextBox();
    imageBox = drawImageBox('image/1.png');

	heartPath = drawHeartPath();
	heartPath.scale(2).move(0, -100);
    let v = (1000/animSpeed) * 2;

    text = draw.text('On a snowy Valentine\'s Day, \nJasper Bunny still could not think \nof a gift good enough for Lilly.\nJasper loved his wife very much. \nSo he couldn\'t give her just any old gift.').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();

    text.remove();
    text = draw.text('"Perhaps seeing what my \nneighbors are doing for Valentine\'s Day \nwill give me and idea for the perfect \npresent." he thought.').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();

    text.remove();
    textbox.remove();
    imageBox.remove();
	await moveAlongPath(heartPath, v, 210/v, 190/v, 45/v);
    textbox = drawTextBox();
    text = draw.text('"He stopped at the Porcupines\' house. \n"We are each knitting a scarf for \nMother." said the seven porcupine children.').fill('white').font({size:24}).center(750, 550).opacity(1);
    imageBox = drawImageBox('image/2.png');
    await waitForClick();

    text.remove();
    imageBox.remove();
    imageBox = drawImageBox('image/3.png');
    text = draw.text('"A handmade scarf did seem \nlike a good gift for Lilly,\n but Jasper couldn\'t get \nthe hang of knitting.').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();

    imageBox.remove();
    text.remove();
    textbox.remove();
    textbox = drawTextBox();
    imageBox = drawImageBox('image/4.png');
    text = draw.text('On his way, Jasper \nsaw a glow coming from the Frogs\' window.\n"I bet Miriam will have\na good suggestion." thought Jasper.').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();

    imageBox.remove();
    text.remove();
    textbox.remove();
    await moveAlongPath(heartPath, v, 0, 240/v, 45/v);
    imageBox = drawImageBox('image/5.png');
    textbox = drawTextBox();
    text = draw.text('Inside, Miriam showed Jasper \na box fill of chocolate-covered \nflies. "Landon will be so\nexcited when he wakes up!" she whispered.\n"I\'m sure he will." Jasper agreed pleasantly."').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    textbox.remove();

    imageBox.remove();
    imageBox = drawImageBox('image/6.png');
    textbox = drawTextBox();
    text = draw.text('He thought, "This is a treat for a frog\nbut it\'s definitely not something\nmy Lilly would enjoy!"').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    textbox.remove();
    imageBox.remove();


	await moveAlongPath(heartPath, v, 190/v, 40/v, 45/v);
    imageBox = drawImageBox('image/7.png');
    textbox = drawTextBox();
    text = draw.text('"Still no gift in sight or mind,\nJasper plodded past Everett\'s wagon.\n"Step right up!" gushed the salesman.\n "I\'ve got beautiful blooms and\nfantastic flowers!"').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    textbox.remove();
    imageBox.remove();

    imageBox = drawImageBox('image/8.png');
    textbox = drawTextBox();
    text = draw.text('But all of the raccoon\'s flowers had \nwilted from the cold. None of them matched\n the beauty Jasper\nhad in mind for Lilly."').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    textbox.remove();
    imageBox.remove();

    await moveAlongPath(heartPath, v, 190/v, -40/v, 45/v);
    imageBox = drawImageBox('image/9.png');
    textbox = drawTextBox();
    text = draw.text('"Jasper was worried. It was getting late,\nand he still had nothing\nfor Lilly. "Jasper!" called Teagan.\n"What are you doing out on\nthis cold, snowy Valentine\'s Day?').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();

    text = draw.text('"I\'m searching for a gift for Lilly."\nJasper replied," but I don\'t\nknow what to do."\n"Come in and we\'ll brainstorm\nby the fire." Teagan said warmly"').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    textbox.remove();
    imageBox.remove();

    imageBox = drawImageBox('image/10.png');
    textbox = drawTextBox();
    text = draw.text('"I do understand." Teagan said.\n"I myself have been hunting\nall day for a Valentine\'s gift\nto impress my vixen, Faith.\nAnd I think rabbit stew\nis just the ticket!"').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    textbox.remove();
    imageBox.remove();

    imageBox = drawImageBox('image/11.png');
    textbox = drawTextBox();
    text = draw.text('"Before Jasper knew it, he was in the soup!"').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    textbox.remove();
    imageBox.remove();

    imageBox = drawImageBox('image/12.png');
    textbox = drawTextBox();
    text = draw.text('Terrified, Jasper waited for his\nchance. When Teagan walked away\nto pull out Faith\'s chair,').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    imageBox.remove();

    imageBox = drawImageBox('image/12b.png');
    text = draw.text('Jasper sprang\nout of the pot and escaped,\nquick as a bunny').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    textbox.remove();
    imageBox.remove();

    await moveAlongPath(heartPath, v, 0, -240/v, 45/v);
    
    imageBox = drawImageBox('image/13.png');
    textbox = drawTextBox();
    text = draw.text('Jasper was wet and cold and\nready to give up when\nSpalding called down.\n"This necklace of winter berries\nwill make a wonderful\nValentine\'s gift for\nmy mate, don\'t you think, Jasper?"').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    imageBox.remove();

    imageBox = drawImageBox('image/14.png');
    text = draw.text('"Yes, it\'s a splendid gift."\nsaid Jasper sadly. "But I have\nnothing for Lilly. I have\nbeen around the entire valley,\nand I can\'t give her a\nhandmade scarf or wilter flowers\nor chocolate flies or any gift at\nall if I become rabbit stew!"').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    imageBox.remove();

    imageBox = drawImageBox('image/15.png');
    text = draw.text('The cardinal looked thoughtful,\n"Hmm... no gift, you say?"').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    imageBox.remove();

    imageBox = drawImageBox('image/15b.png');
    text = draw.text('"From where I sit I see you have given\nLilly a wonderful gift already."').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    imageBox.remove();

    imageBox = drawImageBox('image/16.png');
    text = draw.text('Back at the burrow,\nLilly stepped outside to wait for Jasper.\nShe saw the heart he\nhad made for her...').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    textbox.remove();
    imageBox.remove();


    await moveAlongPath(heartPath, v, -210/v, -190/v, 45/v);
    textbox = drawTextBox();
    imageBox = drawImageBox('image/17.png');
    text = draw.text('.. and she loved it.').fill('white').font({size:24}).center(750, 550).opacity(1);
    await waitForClick();
    text.remove();
    textbox.remove();
    imageBox.remove();

	v = (1000/animSpeed);
    await moveAlongPathTransform(heartPath, v, 450/v, 200/v, 90/v, 0.98);
    imageBox = drawImageBox('image/18.png');
	//heartPath.scale(0.5).move(50, -180);
    await waitForClick();

	//heartPath.remove();
}

main();

