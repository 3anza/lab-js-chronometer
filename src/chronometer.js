class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    if(this.currentTime === 0){
      return 0;
    }
    return this.curentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2, '0');
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}:${centiseconds}`;
  }
}
