// Color scheme from https://coolors.co

let backgroundColor = '#17bebb';
let hourColor = '#edb88b';
let minuteColor = '#fad8d6';
let secondColor = '#ef3e36';

let canvasSize = 600;
let lastMinute = null;

function setup() {
	createCanvas(canvasSize, canvasSize);
}

function draw() {
	background(backgroundColor);

	drawCircle(1, (hour() % 12)/12, hourColor);
	drawCircle(.5, minute() / 60, minuteColor);
	drawCircle(.25, second() / 60, secondColor);

	drawMarks(1, 12, hourColor, false);
	drawMarks(.5, 4, minuteColor, true);
	drawMarks(.25, 4, secondColor, false);

	if (minute() !== lastMinute) {
		lastMinute = minute();
		console.log(minute());
	}
}

function drawCircle(scale, size, color) {
	fill(color);
	stroke(color);
	ellipse(canvasSize*scale/2, canvasSize*scale/2, canvasSize * size*scale, canvasSize * size*scale);
}

function drawMarks(scale, numberOfMarks, color, horizontal) {
	stroke(color);
	let dp = canvasSize / numberOfMarks * scale / 2;
	for (let i = 0; i <= numberOfMarks; i++) {
		let pos = canvasSize * scale / 2 + i * dp;
		if (horizontal === true) {
			line(0, pos, canvasSize * scale, pos);
		}
		else {
			line(pos, 0, pos, canvasSize * scale);
		}
	}
}
