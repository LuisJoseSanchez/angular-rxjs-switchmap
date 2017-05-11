import { Component } from '@angular/core';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    console.log('simulating HTTP requests');
    const http1$ = simulateHttp("1", 2000);
    const http2$ = simulateHttp("2", 1000);
  }
}

function simulateHttp(val: any, delay:number) {
  return Observable.of(val).delay(delay);
}