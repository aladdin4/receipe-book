import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  start = 0;
  oddItems: string[] = [];
  evenItems: string[] = [];
  running;
  state = 'is stopped';

  startCreating() {
    //first call for init
    this.setTime();
    this.state = 'is running';

    //then keep running until stopped
    this.running = setInterval(() => {
      this.setTime();
    }, 1000);
  }
  stopCreating() {
    this.state = 'is stopped';
    clearInterval(this.running);
  }
  setTime() {
    this.start++;
    if (this.start % 2) {
      this.evenItems.push('Even Item #' + this.start);
    } else {
      this.oddItems.push('Odd Item #' + this.start);
    }
  }
}
