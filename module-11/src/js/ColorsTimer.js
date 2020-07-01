'use strict';

export default class ColorTimer {
	constructor({ colors, elem }, { btnStart, btnStop }) {
		this._colors = colors;
		this._elem = elem;
		this.btnStart = btnStart;
		this.btnStop = btnStop;
		this.isAction = false;

		this.eventlist();
	}

	start() {
		if (this.isAction) return;
		this.isAction = true;

		this.timerID = setInterval(() => {
			this._elem.bgColor = this._colors[this.randomIntegerFromInterval(0, this._colors.length)];
		}, 1000);
	}

	stop() {
		this.isAction = false;
		clearTimeout(this.timerID);
		this._elem.bgColor = 'FFFFFF';
	}

	eventlist() {
		this.btnStart.addEventListener('click', () => this.start());
		this.btnStop.addEventListener('click', () => this.stop());
	}

	randomIntegerFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}
