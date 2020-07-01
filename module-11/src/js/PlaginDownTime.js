'use strict';

export default class MyTimer {
	constructor({ fallTime, spanDD, spanDH, spanDM, spanDS }) {
		this._spanDS = spanDS;
		this._spanDM = spanDM;
		this._spanDH = spanDH;
		this._spanDD = spanDD;
		this._startTimesFall = fallTime;

		this.downStart();
	}
	pad(val) {
		return String(val).padStart(2, '0');
	}

	downStart() {
		this.downStartTime = new Date(this._startTimesFall);

		this.downTimerID = setInterval(() => {
			this.downCurentTime = Date.now();
			this.downDeltaTime = this.downStartTime.setUTCHours(0, 0, 0, 0) - this.downCurentTime;

			this.downClock(this.downDeltaTime);
		}, 1000);
	}

	downClock(time) {
		this.days(time);
		this.hours(time);
		this.minus(time);
		this.seconds(time);
	}

	days(time) {
		this.daysDown = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

		this._spanDD.textContent = `${this.daysDown}`;
	}
	hours(time) {
		this.hoursDown = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		this._spanDH.textContent = `${this.hoursDown}`;
	}
	minus(time) {
		this.minsDown = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
		this._spanDM.textContent = `${this.minsDown}`;
	}
	seconds(time) {
		this.secsDown = this.pad(Math.floor((time % (1000 * 60)) / 1000));
		this._spanDS.textContent = `${this.secsDown}`;
	}
}
