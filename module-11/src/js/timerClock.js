'use strict';

export default class MyTimer {
  constructor({ fallTime, clock, btnStart, btnStop, downData }) {
    this.elem = clock;
    this.downData = downData;
    this.btnStart = btnStart;
    this.btnStop = btnStop;
    this.startTimesFall = fallTime;
    this.isAction = false;

    this.eventlist();
    this.downStart();
  }

  start() {
    if (this.isAction) return;
    this.isAction = true;
    this.startTime = Date.now();
    this.timerID = setInterval(() => {
      this.curentTime = Date.now();
      this.deltaTime = this.curentTime - this.startTime;

      this.updateClock(this.deltaTime);
    }, 1000);
  }

  stop() {
    this.isAction = false;
    clearInterval(this.timerID);
    this.deltaTime = 0;
    this.updateClock(this.deltaTime);
  }

  updateClock(dataTime) {
    this.data = new Date(dataTime);
    this.hours = this.pad(this.data.getUTCHours());
    this.mins = this.pad(this.data.getMinutes());
    this.secs = this.pad(this.data.getSeconds());
    this.elem.textContent = `${this.hours}:${this.mins}:${this.secs}`;
  }

  pad(val) {
    //.padEnd(maxLength, fillString)
    return String(val).padStart(2, '0');
  }
  eventlist() {
    this.btnStart.addEventListener('click', () => this.start());
    this.btnStop.addEventListener('click', () => this.stop());
  }

  downStart() {
    this.downStartTime = new Date(this.startTimesFall);

    this.downTimerID = setInterval(() => {
      this.downCurentTime = Date.now();
      this.downDeltaTime = this.downStartTime - this.downCurentTime;
      this.downdataClokc(this.downDeltaTime);
    }, 1000);
  }

  downdataClokc(time) {
    this.daysDown = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hoursDown = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.minsDown = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.secsDown = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.downData.textContent = `${this.daysDown}:${this.hoursDown}:${this.minsDown}:${this.secsDown}`;
  }
}

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

console.log(
  '---------------------------------start test timer clock----------------------------',
);
// let data = new Date();
// const options = {
// 	hour: '2-digit',
// 	minute: '2-digit',
// 	second: '2-digit'
// };
// const timeUA = data.toLocaleString('Uk-uk', options);
// rafs.clock.textContent = timeUA;
// let c = 0;

// rafs.batStart.addEventListener('click', (e) => {
// 	const elem = e.target;
// 	c += 1;
// 	rafs.clock.textContent = c;
// });

// rafs.batStop.addEventListener('click', (e) => {
// 	const elem = e.target;
// 	c -= 1;

// 	rafs.clock.textContent = MyTimer.start.bind(MyTimer);
// });
console.log(
  '---------------------------------stop test timer clock----------------------------',
);
