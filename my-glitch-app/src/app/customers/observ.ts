// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-example',
//   template: `
//     <div>{{ data$ | async }}</div>
//   `
// })
// export class ExampleComponent implements OnInit {
//   data$: Observable<string>;

//   ngOnInit() {
//     // Create an Observable that emits 'Hello, RxJS!' after 1 second
//     this.data$ = new Observable<string>(observer => {
//       setTimeout(() => {
//         observer.next('Hello, RxJS!');
//         observer.complete();
//       }, 1000);
//     });
//   }
// }
