import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  displaySecrets = false;
  clicks = [];
  showSecret = function () {
    this.displaySecrets = !this.displaySecrets;
    this.clicks.push('clicked at:' + new Date().getSeconds());
  };
  setColor = function (index) {
    if (index >= 5) {
      return 'blue';
    } else {
      return 'white';
    }
  };
}
