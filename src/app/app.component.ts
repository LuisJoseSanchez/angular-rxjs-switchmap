import { Component } from '@angular/core';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    console.log('simulating HTTP requests');

    // Example 1
    /*
    const http1$ = simulateHttp("1", 2000);
    const http2$ = simulateHttp("2", 1000);

    http1$.subscribe(
      console.log,
      console.error,
      () => console.log('http1$ completed')
    );

    http2$.subscribe(
      console.log,
      console.error,
      () => console.log('http2$ completed')
    );
    */

    ///////////////////////////////////////////////////////////////////////////

    // Example 2

    const saveUser$ = simulateHttp(" user saved ", 1000);

    const httpResult$ = saveUser$.switchMap(sourceValue => {
      console.log(sourceValue);
      return simulateHttp(" data reloaded ", 2000);
    });


    httpResult$.subscribe(
      console.log,
      console.error,
      () => console.log('completed httpResult$')
    );
  }
}

function simulateHttp(val: any, delay: number) {
  return Observable.of(val).delay(delay);
}


function simulateFirebase(val: any, delay: number) {
  return Observable.interval(delay).map(index => val + " " + index);
}